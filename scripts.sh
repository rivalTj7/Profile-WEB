#!/bin/bash

# Scripts útiles para el desarrollo del portfolio

echo "🚀 Scripts de Desarrollo - Portfolio Rivaldo Tojín"
echo "=================================================="
echo ""

# Función para mostrar el menú
show_menu() {
    echo "Selecciona una opción:"
    echo "1) 🔧 Setup inicial (instalar dependencias)"
    echo "2) 💻 Iniciar desarrollo local"
    echo "3) 🏗️  Build de producción"
    echo "4) ✅ Ejecutar tests de calidad (lint + type-check)"
    echo "5) 🔄 Limpiar y reinstalar"
    echo "6) 📦 Build y preview local"
    echo "7) 🚀 Preparar para deployment"
    echo "8) 📊 Analizar bundle size"
    echo "9) 🔍 Verificar estructura del proyecto"
    echo "0) ❌ Salir"
    echo ""
}

# Setup inicial
setup() {
    echo "🔧 Instalando dependencias..."
    npm install
    echo "✅ Setup completado!"
}

# Desarrollo
dev() {
    echo "💻 Iniciando servidor de desarrollo..."
    npm run dev
}

# Build
build() {
    echo "🏗️  Construyendo proyecto..."
    npm run build
    echo "✅ Build completado! Los archivos están en ./out"
}

# Tests de calidad
quality() {
    echo "✅ Ejecutando lint..."
    npm run lint
    echo ""
    echo "✅ Verificando tipos..."
    npm run type-check
    echo ""
    echo "✅ Checks de calidad completados!"
}

# Limpiar y reinstalar
clean() {
    echo "🧹 Limpiando node_modules, .next y package-lock.json..."
    rm -rf node_modules .next package-lock.json out
    echo "📦 Reinstalando dependencias..."
    npm install
    echo "✅ Limpieza completada!"
}

# Build y preview
preview() {
    echo "🏗️  Construyendo proyecto..."
    npm run build
    echo "🚀 Iniciando servidor de producción..."
    npm run start
}

# Preparar deployment
prepare_deploy() {
    echo "🚀 Preparando para deployment..."
    echo ""
    echo "1️⃣  Ejecutando tests de calidad..."
    npm run lint
    npm run type-check
    echo ""
    echo "2️⃣  Construyendo proyecto..."
    npm run build
    echo ""
    echo "✅ Proyecto listo para deployment!"
    echo ""
    echo "📝 Próximos pasos:"
    echo "   1. Sube los cambios a GitHub: git push origin main"
    echo "   2. Vercel desplegará automáticamente"
    echo "   o"
    echo "   3. Ejecuta: vercel --prod"
}

# Analizar bundle
analyze() {
    echo "📊 Analizando tamaño del bundle..."
    npm run build
    echo ""
    echo "📁 Tamaño de los archivos:"
    du -sh out/
}

# Verificar estructura
verify() {
    echo "🔍 Verificando estructura del proyecto..."
    echo ""
    
    # Archivos esenciales
    files=(
        "package.json"
        "tsconfig.json"
        "next.config.js"
        "tailwind.config.js"
        ".gitignore"
        "README.md"
        "src/app/layout.tsx"
        "src/app/page.tsx"
        "src/data/cvData.ts"
    )
    
    for file in "${files[@]}"; do
        if [ -f "$file" ]; then
            echo "✅ $file"
        else
            echo "❌ $file - FALTA"
        fi
    done
    
    echo ""
    echo "📁 Componentes:"
    ls -1 src/components/ 2>/dev/null || echo "❌ Carpeta src/components no encontrada"
    
    echo ""
    echo "🔧 Verificación completada!"
}

# Loop principal
while true; do
    show_menu
    read -p "Opción: " option
    echo ""
    
    case $option in
        1) setup ;;
        2) dev ;;
        3) build ;;
        4) quality ;;
        5) clean ;;
        6) preview ;;
        7) prepare_deploy ;;
        8) analyze ;;
        9) verify ;;
        0) echo "👋 ¡Hasta luego!"; exit 0 ;;
        *) echo "❌ Opción inválida" ;;
    esac
    
    echo ""
    read -p "Presiona Enter para continuar..."
    clear
done
