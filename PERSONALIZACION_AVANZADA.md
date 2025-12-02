# 🎨 Guía de Personalización Avanzada

Esta guía te ayudará a personalizar tu portfolio más allá de lo básico.

## 🎭 Temas y Colores

### 1. Cambiar el Color Principal

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#ecfeff',   // Muy claro
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',  // Color principal
        600: '#0891b2',  // Hover
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',  // Muy oscuro
      },
    },
  },
}
```

**Generador recomendado:** [UIColors](https://uicolors.app/create)

### 2. Gradientes Personalizados

En tus componentes:

```tsx
className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
```

Opciones populares:
```tsx
// Sunset
"from-orange-500 via-red-500 to-pink-500"

// Ocean
"from-blue-500 via-cyan-500 to-teal-500"

// Forest
"from-green-500 via-emerald-500 to-teal-500"

// Neon
"from-purple-600 via-pink-500 to-yellow-400"
```

### 3. Modo Oscuro Personalizado

En `globals.css`:

```css
.dark {
  --background: 222.2 84% 4.9%;  /* Cambia esto */
  --foreground: 210 40% 98%;
}
```

## 🖼️ Imágenes y Assets

### 1. Foto de Perfil

Crea un componente de imagen:

```tsx
// src/components/ProfileImage.tsx
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary-500">
      <Image
        src="/profile.jpg"
        alt="Rivaldo Tojín"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
```

Usa en `Hero.tsx` reemplazando el div de iniciales.

### 2. Optimizar Imágenes

Convierte a WebP para mejor performance:

```bash
# Instalar imagemagick
brew install imagemagick  # Mac
sudo apt install imagemagick  # Linux

# Convertir
convert profile.jpg -quality 85 profile.webp
```

### 3. Agregar Logo Personal

```tsx
// En Header.tsx, reemplaza "RT" con:
<Image 
  src="/logo.svg" 
  alt="Logo" 
  width={40} 
  height={40}
/>
```

## ✨ Animaciones Avanzadas

### 1. Animación de Texto

```tsx
import { motion } from 'framer-motion';

export default function AnimatedText() {
  const text = "Rivaldo Tojín".split("");
  
  return (
    <motion.h1>
      {text.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
```

### 2. Hover Effects Personalizados

```tsx
<motion.div
  whileHover={{ 
    scale: 1.05,
    rotate: 2,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  {/* Contenido */}
</motion.div>
```

### 3. Partículas de Fondo

Instala:
```bash
npm install react-tsparticles tsparticles
```

Crea componente:
```tsx
// src/components/ParticlesBackground.tsx
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          color: { value: "#0ea5e9" },
          links: {
            enable: true,
            color: "#0ea5e9"
          },
          move: {
            enable: true,
            speed: 1
          }
        }
      }}
    />
  );
}
```

## 📝 Contenido Dinámico

### 1. Blog Section

Agrega una sección de blog:

```tsx
// src/components/Blog.tsx
export default function Blog() {
  const posts = [
    {
      title: "Mi experiencia con Next.js 14",
      date: "2024-01-15",
      excerpt: "Aprende sobre las nuevas features...",
      slug: "nextjs-14-experience"
    },
    // Más posts...
  ];

  return (
    <section className="py-20">
      <h2>Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <article key={post.slug}>
            <h3>{post.title}</h3>
            <time>{post.date}</time>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.slug}`}>Leer más →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
```

### 2. Testimonios

```tsx
// src/components/Testimonials.tsx
const testimonials = [
  {
    name: "Juan Pérez",
    role: "CTO en TechCorp",
    text: "Rivaldo es un excelente desarrollador...",
    image: "/testimonial-1.jpg"
  },
  // Más testimonios...
];
```

### 3. Timeline Interactivo

```tsx
// Instala
npm install react-vertical-timeline-component

// Usa
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
```

## 🎯 Features Adicionales

### 1. Contador de Visitas

Integra con Vercel Analytics:

```bash
npm install @vercel/analytics
```

```tsx
// En layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Formulario de Contacto Funcional

Usa Web3Forms (gratis):

```tsx
// src/components/ContactForm.tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "TU_WEB3FORMS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Mensaje enviado!");
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Form fields */}
      <span>{result}</span>
    </form>
  );
}
```

### 3. Scroll Progress Bar

```tsx
// src/components/ScrollProgress.tsx
'use client';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-600 z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
```

### 4. Compartir en Redes Sociales

```tsx
// src/components/ShareButtons.tsx
export default function ShareButtons() {
  const shareUrl = "https://tu-portfolio.vercel.app";
  
  return (
    <div className="flex gap-4">
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
        target="_blank"
        className="btn"
      >
        Compartir en Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        className="btn"
      >
        Compartir en LinkedIn
      </a>
    </div>
  );
}
```

### 5. Skills con Animación de Progreso

```tsx
// src/components/SkillBar.tsx
'use client';
import { motion } from 'framer-motion';

export default function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
```

## 🌍 Internacionalización (i18n)

### Setup básico con next-intl:

```bash
npm install next-intl
```

```tsx
// src/i18n.ts
export const locales = ['es', 'en'];
export const defaultLocale = 'es';

export const messages = {
  es: {
    hero: {
      title: "Desarrollador Full Stack",
      cta: "Contáctame"
    }
  },
  en: {
    hero: {
      title: "Full Stack Developer",
      cta: "Contact Me"
    }
  }
};
```

## 🔍 SEO Avanzado

### 1. Sitemap Dinámico

```tsx
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rivaldo-tojin.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Más URLs...
  ];
}
```

### 2. Robots.txt

```tsx
// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://rivaldo-tojin.vercel.app/sitemap.xml',
  };
}
```

### 3. JSON-LD para Rich Snippets

```tsx
// En layout.tsx o page.tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rivaldo Alexander Tojín Ixcotoyac',
  jobTitle: 'Full Stack Developer',
  url: 'https://rivaldo-tojin.vercel.app',
  sameAs: [
    'https://www.linkedin.com/in/rivaldo-tojín-54286b307',
    'https://github.com/rivalTj7'
  ]
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

## 🎨 Componentes UI Adicionales

### 1. Modal

```tsx
// src/components/Modal.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 z-50 max-w-md w-full"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

### 2. Tooltip

```tsx
// src/components/Tooltip.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Tooltip({ children, text }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap"
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

## 🚀 Performance Tips

### 1. Lazy Loading de Imágenes

```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
/>
```

### 2. Code Splitting

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Cargando...</p>,
  ssr: false
});
```

### 3. Fonts Optimization

```tsx
// En layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});
```

## 📊 Tracking y Analytics

### 1. Event Tracking

```tsx
// src/utils/analytics.ts
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Uso
trackEvent('button_click', { button_name: 'download_cv' });
```

### 2. Scroll Tracking

```tsx
useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
    if (scrollPercent > 75) {
      trackEvent('scroll_75_percent');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 💡 Recursos Útiles

- **Colores**: [Coolors](https://coolors.co)
- **Gradientes**: [Gradient Hunt](https://gradienthunt.com)
- **Iconos**: [Heroicons](https://heroicons.com)
- **Animaciones**: [Framer Motion Docs](https://www.framer.com/motion/)
- **UI Components**: [Tailwind UI](https://tailwindui.com)
- **Inspiración**: [Awwwards](https://www.awwwards.com)

---

¡Personaliza tu portfolio y hazlo único! 🎨✨
