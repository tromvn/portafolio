# Portafolio Web - Guía para Agentes

## Estructura del Proyecto
- **Directorio principal**: `/home/tromvn/programming/portafolio/`
- **Archivos clave**: `index.html`, `style.css` (vacíos actualmente)
- **Datos**: `cv.txt` contiene el contenido del CV en formato texto plano

## Tecnologías a Usar
- **Frontend**: HTML5, CSS3, Tailwind CSS, JavaScript/TypeScript
- **Framework**: React (según solicitud del usuario)
- **Estilo**: Tailwind CSS (preferido por el usuario)

## Comandos Útiles
```bash
# Para servir el proyecto localmente (si se usa React)
npm run dev

# Para compilar Tailwind CSS (si se usa)
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

## Convenciones
- Usar Tailwind CSS para estilos
- Componentizar la interfaz con React
- Extraer datos del CV desde `cv.txt` para mostrar en el portafolio
- Mantener diseño responsive y profesional

## Entrypoints
- `index.html`: Punto de entrada principal del portafolio
- `style.css`: Estilos base (puede ser reemplazado por Tailwind)

## Notas
- El proyecto está en fase inicial (archivos vacíos)
- Se requiere implementar un portafolio web completo basado en el CV proporcionado
- Priorizar diseño limpio, profesional y responsive