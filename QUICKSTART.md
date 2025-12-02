# ⚡ Guía de Inicio Rápido

## 🚀 En 5 Minutos

### 1. Descargar e Instalar

```bash
# Descomprime el archivo
tar -xzf rivaldo-cv-portfolio.tar.gz
cd rivaldo-cv-portfolio

# Instala las dependencias
npm install

# Ejecuta el proyecto
npm run dev
```

Abre http://localhost:3000 🎉

### 2. Personalizar

Edita estos archivos para actualizar tu información:

1. **components/Hero.tsx** - Tu nombre y título
2. **components/Experience.tsx** - Tu experiencia laboral
3. **components/Projects.tsx** - Tus proyectos
4. **components/Skills.tsx** - Tus habilidades
5. **components/Contact.tsx** - Tu información de contacto

### 3. Desplegar en GitHub Pages

```bash
# 1. Crear repositorio en GitHub (ejemplo: cv-portfolio)

# 2. Actualizar next.config.js con el nombre de tu repo
# Cambia '/cv-portfolio' por '/tu-repo'

# 3. Subir código
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main

# 4. Configurar GitHub Pages
# Ve a Settings > Pages > Source: GitHub Actions
```

¡Tu sitio estará en vivo en 2-3 minutos! 🎊

---

📖 Para más detalles, lee:
- `README.md` - Documentación completa
- `DEPLOYMENT.md` - Guía detallada de despliegue

## 🎨 Características

✅ Diseño moderno y profesional
✅ 100% responsive
✅ Animaciones suaves
✅ SEO optimizado
✅ CI/CD automático con GitHub Actions
✅ Performance optimizado

## 🛠️ Comandos Útiles

```bash
npm run dev      # Desarrollo
npm run build    # Construir para producción
npm run start    # Servidor de producción
npm run lint     # Verificar código
```

## 📞 ¿Necesitas Ayuda?

1. Revisa `README.md` para documentación completa
2. Consulta `DEPLOYMENT.md` para problemas de despliegue
3. Verifica los logs de GitHub Actions si algo falla

¡Éxito con tu portfolio! 🚀
