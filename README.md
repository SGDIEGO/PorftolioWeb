# Portafolio Web (Node.js + TypeScript + Vite)

Plantilla de portafolio moderna, responsive y facil de personalizar.

URL esperada en produccion:

- https://sgdiego.github.io/PorftolioWeb/

## Stack

- Node.js
- React
- TypeScript
- Vite

## Como ejecutar

```bash
npm install
npm run dev
```

El proyecto quedara disponible en la URL que indique Vite (por defecto `http://localhost:5173`).

## Como personalizar tu informacion

Toda tu informacion principal esta centralizada en:

- `src/data/portfolioData.ts`

Editando ese archivo puedes cambiar:

- Presentacion principal (nombre, rol, resumen, ubicacion, disponibilidad)
- Temas o areas principales
- Habilidades tecnicas
- Proyectos destacados
- Experiencia y educacion
- Certificaciones
- Canales de contacto

## Estructura importante

- `src/App.tsx`: estructura de secciones del portafolio
- `src/App.css`: estilos de componentes y layout responsive
- `src/index.css`: estilos globales, tipografia y variables de color
- `src/data/portfolioData.ts`: contenido configurable

## Build de produccion

```bash
npm run build
```

Si quieres previsualizar el build generado:

```bash
npm run preview
```

## Publicar en GitHub Pages

El proyecto ya queda configurado para publicarse en GitHub Pages desde el repositorio PorftolioWeb.

### 1. Subir los cambios a GitHub

```bash
git add .
git commit -m "Configura SEO y deploy a GitHub Pages"
git push origin main
```

### 2. Activar GitHub Pages con GitHub Actions

En GitHub entra a:

- Settings
- Pages

Y en Build and deployment selecciona:

- Source: GitHub Actions

El workflow creado en .github/workflows/deploy-pages.yml publicara automaticamente el contenido de dist cada vez que hagas push a main.

### 3. Verificar la URL publicada

Cuando el workflow termine, el sitio deberia quedar disponible en:

- https://sgdiego.github.io/PorftolioWeb/

## SEO y indexacion

Se incluyeron estos elementos para mejorar visibilidad e indexacion:

- Meta title y meta description
- Open Graph y Twitter Cards
- Canonical
- Datos estructurados JSON-LD
- robots.txt
- sitemap.xml

Archivos relevantes:

- index.html
- public/robots.txt
- public/sitemap.xml
- public/site.webmanifest
- public/social-preview.svg

## Alta en Google Search Console

GitHub Pages no registra tu pagina por si solo. Para que Google la procese mejor, haz esto despues de publicar:

### 1. Abrir Search Console

- https://search.google.com/search-console

### 2. Anadir propiedad

Usa la opcion de prefijo de URL y registra exactamente:

- https://sgdiego.github.io/PorftolioWeb/

### 3. Enviar sitemap

En la seccion Sitemaps envia:

- https://sgdiego.github.io/PorftolioWeb/sitemap.xml

### 4. Solicitar indexacion

Usa la inspeccion de URL sobre la home y solicita indexacion manual la primera vez.

## Si cambias el nombre del repo o usas dominio propio

Debes actualizar estas URLs:

- vite.config.ts
- index.html
- public/robots.txt
- public/sitemap.xml

Si luego usas un dominio propio, conviene tambien crear un archivo CNAME y volver a ajustar canonical, Open Graph y Search Console.
