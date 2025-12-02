# 📘 Guía Completa de Deployment

Esta guía te llevará paso a paso para desplegar tu portfolio en Vercel con CI/CD completo.

## 🎯 Opción 1: Deployment Rápido en Vercel (Recomendado)

### Paso 1: Preparar el Repositorio en GitHub

```bash
# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portfolio setup"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/rivaldo-cv-portfolio.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel

1. **Ir a Vercel**: [https://vercel.com](https://vercel.com)

2. **Iniciar Sesión**: Usa tu cuenta de GitHub

3. **Importar Proyecto**:
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio `rivaldo-cv-portfolio`
   - Click en "Import"

4. **Configuración del Proyecto**:
   - **Framework Preset**: Next.js (detectado automáticamente)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `out` (ya configurado en next.config.js)
   - **Install Command**: `npm install` (por defecto)

5. **Deploy**: Click en "Deploy"

¡Listo! Tu sitio estará en línea en menos de 2 minutos.

### Paso 3: Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## 🔄 Opción 2: CI/CD Completo con GitHub Actions

### Paso 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Paso 2: Vincular el Proyecto

```bash
# Login en Vercel
vercel login

# En el directorio del proyecto
vercel link
```

Esto creará un archivo `.vercel/project.json` con tus IDs.

### Paso 3: Obtener los Tokens

```bash
# Ver el contenido de project.json
cat .vercel/project.json
```

Verás algo como:
```json
{
  "orgId": "team_xxxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxxx"
}
```

### Paso 4: Generar Token de Vercel

1. Ve a [https://vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click en "Create Token"
3. Dale un nombre descriptivo: "GitHub Actions CI/CD"
4. Selecciona el scope apropiado
5. Copia el token generado

### Paso 5: Configurar GitHub Secrets

1. Ve a tu repositorio en GitHub
2. Click en "Settings" → "Secrets and variables" → "Actions"
3. Click en "New repository secret"
4. Agrega los siguientes secrets:

```
Nombre: VERCEL_TOKEN
Valor: [El token que copiaste]

Nombre: VERCEL_ORG_ID
Valor: [El orgId de project.json]

Nombre: VERCEL_PROJECT_ID
Valor: [El projectId de project.json]
```

### Paso 6: ¡Push y Observa!

```bash
git add .
git commit -m "Add CI/CD configuration"
git push origin main
```

Ve a la pestaña "Actions" en GitHub para ver tu pipeline en acción.

## 🌐 Opción 3: GitHub Pages (Alternativa)

### Ventajas de Vercel sobre GitHub Pages:
- ✅ Mejor rendimiento global (CDN)
- ✅ HTTPS automático
- ✅ Dominios personalizados fáciles
- ✅ Analytics integrados
- ✅ Preview deployments automáticos para PRs

### Si aún prefieres GitHub Pages:

1. **Modificar next.config.js**:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/rivaldo-cv-portfolio', // nombre de tu repo
  trailingSlash: true,
}
```

2. **Crear workflow para GitHub Pages**:

Crea `.github/workflows/deploy-gh-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

3. **Configurar GitHub Pages**:
   - Ve a Settings → Pages
   - Source: "GitHub Actions"
   - Save

## 🔧 Troubleshooting

### Error: "Build failed"

```bash
# Limpia caché y reinstala
rm -rf node_modules .next
npm install
npm run build
```

### Error: "VERCEL_TOKEN is not set"

Verifica que configuraste correctamente los secrets en GitHub.

### Error: "Module not found"

```bash
# Asegúrate de tener todas las dependencias
npm install
```

### El sitio se ve diferente en producción

Verifica que no estés usando características específicas de desarrollo:
```bash
npm run build
npm run start
# Prueba localmente el build de producción
```

## 📊 Post-Deployment

### 1. Verificar el Sitio

- Revisa todas las secciones
- Prueba en diferentes dispositivos
- Verifica que los enlaces funcionen
- Prueba el modo oscuro/claro

### 2. SEO

- Verifica meta tags con: [https://metatags.io](https://metatags.io)
- Prueba en Google Search Console
- Genera sitemap si es necesario

### 3. Performance

- Ejecuta Lighthouse en Chrome DevTools
- Objetivo: 90+ en todas las métricas

### 4. Analytics (Opcional)

Agrega Google Analytics o Vercel Analytics:

```typescript
// En layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🎉 ¡Felicidades!

Tu portfolio está ahora en línea y con CI/CD configurado. Cada vez que hagas push a main, tu sitio se actualizará automáticamente.

## 📝 Checklist Final

- [ ] Repositorio en GitHub creado
- [ ] Proyecto importado en Vercel
- [ ] Sitio desplegado y accesible
- [ ] GitHub Secrets configurados (si usas CI/CD)
- [ ] Dominio personalizado configurado (opcional)
- [ ] CV PDF actualizado en `/public`
- [ ] Información personalizada en `cvData.ts`
- [ ] Foto de perfil agregada (opcional)
- [ ] Todos los enlaces funcionando
- [ ] Sitio probado en móvil
- [ ] SEO verificado

## 🔗 URLs Útiles

- Dashboard de Vercel: https://vercel.com/dashboard
- GitHub Actions: https://github.com/tu-usuario/rivaldo-cv-portfolio/actions
- Tu sitio: https://rivaldo-cv-portfolio.vercel.app

---

¿Necesitas ayuda? Revisa la documentación oficial:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/actions)
