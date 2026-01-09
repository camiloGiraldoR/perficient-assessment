# Configuración de GitHub Pages

Este documento explica cómo se ha configurado el proyecto para desplegarse en GitHub Pages.

## Archivos Modificados

### 1. `vite.config.js`
Se agregó la configuración `base: '/perficient-assessment/'` que indica el path base de la aplicación cuando está desplegada en GitHub Pages.

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/perficient-assessment/',
})
```

### 2. `.github/workflows/static.yml`
Este es el workflow de GitHub Actions que automáticamente construye y despliega la aplicación cada vez que se hace push a la rama `main`.

## ¿Qué se sube al repositorio?

Solo necesitas subir:
- Código fuente (carpeta `src/`)
- Archivos de configuración (`vite.config.js`, `package.json`, etc.)
- El workflow de GitHub Actions (`.github/workflows/static.yml`)

**NO** necesitas subir:
- La carpeta `dist/` (está en el `.gitignore`)
- La carpeta `node_modules/` (está en el `.gitignore`)

GitHub Actions se encargará automáticamente de:
1. Instalar las dependencias (`npm ci`)
2. Construir el proyecto (`npm run build`)
3. Desplegar la carpeta `dist/` a GitHub Pages

## Configuración Adicional Requerida en GitHub

Para que el despliegue funcione, debes configurar GitHub Pages en tu repositorio:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En **Source** (Fuente), selecciona **GitHub Actions**
5. Guarda los cambios

## URL de Despliegue

Una vez configurado, tu aplicación estará disponible en:
```
https://camiloGiraldoR.github.io/perficient-assessment/
```

## Cómo Funciona el Workflow

El workflow se ejecuta automáticamente cuando:
- Haces push a la rama `main`
- Lo ejecutas manualmente desde la pestaña Actions en GitHub

El proceso es:
1. **Build Job**: Instala dependencias, construye el proyecto y sube el artifact
2. **Deploy Job**: Toma el artifact y lo despliega en GitHub Pages

## Comandos Locales

Para probar el build localmente:
```bash
npm install
npm run build
npm run preview
```

El comando `preview` te permite ver cómo se verá la aplicación en producción.
