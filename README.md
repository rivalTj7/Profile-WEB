# 🚀 Portfolio Personal - Rivaldo Alexander Tojín Ixcotoyac

[![CI/CD Pipeline](https://github.com/rivalTj7/rivaldo-cv-portfolio/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/rivalTj7/rivaldo-cv-portfolio/actions/workflows/ci-cd.yml)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rivalTj7/rivaldo-cv-portfolio)

Portfolio web profesional desarrollado con Next.js 14, TypeScript y Tailwind CSS. Incluye sistema de CI/CD automatizado y deployment en Vercel.

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX profesional con animaciones suaves
- 🌓 **Dark Mode**: Tema claro y oscuro
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Performance**: Optimizado con Next.js 14 y App Router
- 🔄 **CI/CD**: Pipeline automatizado con GitHub Actions
- 🚀 **Deploy Automático**: Integración con Vercel
- 🎭 **Animaciones**: Framer Motion para transiciones fluidas
- 📊 **SEO Optimizado**: Meta tags y Open Graph configurados

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📦 Instalación y Uso

### Requisitos Previos

- Node.js 18 o superior
- npm 9 o superior

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/rivalTj7/rivaldo-cv-portfolio.git

# Navegar al directorio
cd rivaldo-cv-portfolio

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Comandos Disponibles

```bash
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Construir para producción
npm run start        # Ejecutar build de producción
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos de TypeScript
```

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)

1. **Importar el proyecto en Vercel:**
   - Visita [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Importa el proyecto
   - Vercel detectará automáticamente Next.js

2. **Configurar Variables de Entorno (si es necesario):**
   - No se requieren variables de entorno para la versión básica

3. **Deploy:**
   - El deploy se ejecutará automáticamente con cada push a `main`

### Opción 2: GitHub Pages

Si prefieres GitHub Pages:

```bash
# Construir el proyecto
npm run build

# El contenido estará en la carpeta 'out/'
# Configurar GitHub Pages para usar la rama gh-pages
```

## 🔧 Configuración del CI/CD

### GitHub Secrets Requeridos

Para que el CI/CD funcione completamente con Vercel, configura estos secrets en tu repositorio:

1. Ve a: `Settings` → `Secrets and variables` → `Actions`
2. Agrega los siguientes secrets:

```
VERCEL_TOKEN          # Token de tu cuenta de Vercel
VERCEL_ORG_ID        # ID de tu organización en Vercel
VERCEL_PROJECT_ID    # ID del proyecto en Vercel
```

### Obtener los Valores

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# En el directorio del proyecto
vercel link

# Los valores se guardarán en .vercel/project.json
```

## 📝 Personalización

### Actualizar tu Información

Edita el archivo `src/data/cvData.ts` con tu información personal:

```typescript
export const cvData = {
  personalInfo: {
    name: "Tu Nombre",
    title: "Tu Título",
    // ... más campos
  },
  // ... resto de la información
};
```

### Agregar tu Foto de Perfil

1. Coloca tu imagen en `public/profile.jpg`
2. Actualiza la referencia en `cvData.ts`

### Agregar tu CV en PDF

1. Coloca tu CV PDF en `public/CV_TuNombre.pdf`
2. Actualiza la referencia en el Header

## 🎨 Personalizar Colores

Modifica el archivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      },
    },
  },
}
```

## 📊 Estructura del Proyecto

```
rivaldo-cv-portfolio/
├── .github/
│   └── workflows/
│       └── ci-cd.yml           # Pipeline CI/CD
├── public/                     # Archivos estáticos
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── data/                   # Datos del CV
│   │   └── cvData.ts
│   └── styles/                 # Estilos globales
│       └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🔍 SEO y Performance

- **Lighthouse Score**: Optimizado para alcanzar 90+ en todas las métricas
- **Meta Tags**: Configurados en `layout.tsx`
- **Open Graph**: Preparado para compartir en redes sociales
- **Sitemap**: Generado automáticamente por Next.js

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias, siéntete libre de abrir un issue.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📞 Contacto

- **Email**: rival.alex7@gmail.com
- **LinkedIn**: [Rivaldo Tojín](https://www.linkedin.com/in/rivaldo-tojín-54286b307)
- **GitHub**: [@rivalTj7](https://github.com/rivalTj7)

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!

Desarrollado con ❤️ por Rivaldo Alexander Tojín Ixcotoyac
