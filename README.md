# Garritas Creativas

Primera versión del rediseño de **garritascreativas.com.mx**, creada como sitio estático optimizado para GitHub Pages.

## Stack

- HTML5 semántico
- CSS3 moderno con Custom Properties
- JavaScript Vanilla
- Google Fonts: Fraunces + Manrope
- GitHub Pages
- Sin framework y sin proceso de build obligatorio

## Estructura

```text
/
├── index.html
├── 404.html
├── CNAME
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## Antes de publicar

1. Sustituir las ilustraciones temporales por fotografías reales de Garritas Creativas.
2. Sustituir los testimonios de maqueta por testimonios reales.
3. Editar `WHATSAPP_NUMBER` en `assets/js/main.js` con el número real en formato internacional, sin `+`, espacios ni guiones.
4. Confirmar precios, cobertura de envíos y tiempos de elaboración.
5. Añadir perfiles reales de Instagram/Facebook cuando estén definidos.
6. Revisar el contenido final y las políticas necesarias.

## WhatsApp

En `assets/js/main.js`:

```js
const WHATSAPP_NUMBER = "";
```

Ejemplo de formato para México:

```js
const WHATSAPP_NUMBER = "5219981234567";
```

Mientras el valor esté vacío, los botones abren WhatsApp con el mensaje precargado sin fijar destinatario.

## GitHub Pages

El repositorio debe publicar desde la rama `main` y la raíz `/`.

El archivo `CNAME` ya contiene:

```text
garritascreativas.com.mx
```

Después de subir el primer commit, entra a:

**Repository → Settings → Pages**

y selecciona el método de publicación correspondiente a la rama `main`.

## Desarrollo local

No requiere instalación.

Puedes abrirlo con un servidor estático, por ejemplo:

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Identidad visual

Paleta base:

- Coral alegre: `#FF6B61`
- Turquesa caribeño: `#39B7B3`
- Azul petróleo: `#124F59`
- Amarillo cálido: `#FFC857`
- Crema: `#FFF8EF`
- Rosa suave: `#F7C7CF`
- Verde salvia: `#B8D6C6`

La intención es transmitir alegría y cercanía con un guiño caribeño a Cancún sin saturar la interfaz de colores.
