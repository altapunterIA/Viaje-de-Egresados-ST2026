# Viaje de Egresados 2026 — Colegio Santa Teresita del Niño Jesús

Sitio web del viaje de egresados. Listo para conectar a GitHub y deployar en Vercel.

---

## Estructura del proyecto

```
egresados2026/
├── index.html              ← Archivo principal (abrir esto en el navegador)
├── assets/
│   ├── css/
│   │   └── style.css       ← Todos los estilos separados
│   ├── js/
│   │   └── main.js         ← Contador regresivo y animaciones
│   └── img/
│       ├── destinos/       ← Imágenes del hero e itinerario (una por destino)
│       └── galeria/        ← Fotos de la galería de destinos
```

---

## Imágenes que tenés que cargar vos

### `/assets/img/destinos/`
Poné una imagen representativa de cada lugar:
| Nombre de archivo     | Qué debe mostrar                        |
|-----------------------|-----------------------------------------|
| `hero.jpg`            | Foto principal (recomendado: Cataratas) |
| `entre-rios.jpg`      | Entre Ríos / Palacio San José           |
| `corrientes.jpg`      | Estancia Las Marías                     |
| `iguazu.jpg`          | Cataratas del Iguazú                    |
| `misiones.jpg`        | Ruinas jesuíticas                       |
| `buenosaires.jpg`     | Buenos Aires / Microcentro              |

### `/assets/img/galeria/`
Fotos para la sección galería (mínimo 6, pueden ser las mismas u otras):
| Nombre de archivo     | Sugerencia                              |
|-----------------------|-----------------------------------------|
| `galeria-1.jpg`       | Cataratas (grande, ocupa 2 columnas)    |
| `galeria-2.jpg`       | Buenos Aires                            |
| `galeria-3.jpg`       | Entre Ríos                              |
| `galeria-4.jpg`       | Ruinas jesuíticas                       |
| `galeria-5.jpg`       | Teatro Colón o estadio                  |
| `galeria-6.jpg`       | Luján u otra foto a elección            |

> **Formatos recomendados:** JPG o WebP. Peso máximo sugerido: 500KB por imagen.  
> Las imágenes del hero convienen ser horizontales (16:9 o más anchas).

---

## Cómo subir a GitHub + Vercel

1. Abrí GitHub Desktop → "Add existing repository" → seleccioná la carpeta `egresados2026`
2. Hacé el primer commit ("Inicio proyecto")
3. Publicá el repositorio en GitHub
4. Entrá a [vercel.com](https://vercel.com) → "Add New Project" → importá ese repo
5. Vercel detecta que es HTML estático y lo deploya automáticamente
6. Cada vez que hagas un commit en GitHub, Vercel actualiza el sitio solo

---

## Personalización rápida

Todo lo que probablemente quieras cambiar está marcado con comentarios `<!-- EDITAR -->` en el HTML:
- Fecha de salida del contador
- Nombre del colegio en el footer
- Número de contacto o email
- Cualquier precio o dato del presupuesto

---

*Colegio Santa Teresita del Niño Jesús · San Rafael, Mendoza · 2026*
