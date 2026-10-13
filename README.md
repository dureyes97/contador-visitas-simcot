# 🌿 Contador de Visitas e Impacto • SIMCOT (IDEAM)

Widget institucional y tablero de monitoreo de visualizaciones e impacto para el **Sistema de Monitoreo de las Coberturas de la Tierra (SIMCOT)** del **IDEAM** (Instituto de Hidrología, Meteorología y Estudios Ambientales - Colombia).

![ArcGIS Experience Builder](https://img.shields.io/badge/ArcGIS-Experience_Builder_1.21-0079C1?logo=esri&logoColor=white)
![StoryMaps](https://img.shields.io/badge/ArcGIS-StoryMaps-087f9b?logo=arcgis&logoColor=white)
![IDEAM](https://img.shields.io/badge/Brand-IDEAM_SIMCOT-10b981)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)

---

## 🎯 Aplicación Vinculada

* **ArcGIS StoryMap Oficial:** [Sistema de Monitoreo de las Coberturas de la Tierra - SIMCOT](https://storymaps.arcgis.com/stories/6b45024fb7a247219c33adc524345589)
* **Item ID ArcGIS Online:** `6b45024fb7a247219c33adc524345589`
* **Tablero de Estadísticas ExB:** [Tablero de Estadísticas SIMCOT](https://experience.arcgis.com/experience/6f82270e8c2b4872979478f43e1494d5) (`6f82270e8c2b4872979478f43e1494d5`)
* **Entidad Responsable:** Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) • Subdirección de Ecosistemas e Información Ambiental.

---

## 🎨 Identidad de Marca y Diseño Institucional

El widget respeta y preserva de manera estricta el manual de marca y diseño de la aplicación SIMCOT:

| Elemento | Especificación | Uso |
| :--- | :--- | :--- |
| **Color Primario** | `#087f9b` | Azul petróleo institucional SIMCOT / IDEAM |
| **Color Secundario** | `#126057` / `#10b981` | Verde bosque y esmeralda de coberturas vegetales |
| **Contraste / Base** | `#002625` | Verde petróleo profundo / titulares y odómetro |
| **Acento** | `#fc3b36` | Coral/rojo para alertas de transformación de suelo |
| **Superficie** | `#ffffff` / `#f0f8f9` | Fondo blanco limpio y paneles ligeramente tintados |
| **Logo** | Oficial IDEAM en Base64 | Logotipo vectorial incrustado de alta resolución |
| **Tipografía** | `Inter` / `Avenir Next World` | Titulares y textos analíticos legibles |
| **Dígitos** | `JetBrains Mono` / Monospace | Visualizador odómetro estilo pantalla digital |

---

## 🚀 Opciones de Uso y Despliegue

### Opción 1: Incrustar directamente en la StoryMap de SIMCOT (Recomendado)

Una vez publicado este repositorio en **GitHub Pages** (`https://<tu-usuario>.github.io/contador-visitas-simcot/`):

1. Abre el editor de la **StoryMap** de SIMCOT en ArcGIS Online:
   `https://storymaps.arcgis.com/stories/6b45024fb7a247219c33adc524345589/edit`
2. Desplázate al lugar donde desees ubicar el contador (ejemplo: al pie de la introducción, antes del Tablero de Estadísticas o en la sección final de créditos).
3. Haz clic en el botón `+` para agregar un nuevo bloque de contenido.
4. Selecciona **Incrustar (Embed)**.
5. Pega la URL directa:
   ```text
   https://dureyes97.github.io/contador-visitas-simcot/
   ```
   *O pega el fragmento iframe:*
   ```html
   <iframe src="https://dureyes97.github.io/contador-visitas-simcot/" width="100%" height="340" frameborder="0" style="border:none;border-radius:14px;"></iframe>
   ```
6. Ajusta el tamaño de la tarjeta incrustada (**Mediana**, **Grande** o **Ancho completo**) según la estética de tu narrativa.

---

### Opción 2: Usar como Widget en ArcGIS Experience Builder (Developer Edition)

1. La extensión ya está compilada y disponible en:
   ```text
   arcgis-experience-builder-1.21/client/your-extensions/widgets/contador-visitas-simcot/
   ```
2. Inicia tu servidor de Experience Builder:
   ```bash
   cd arcgis-experience-builder-1.21/client
   npm start
   ```
3. En el generador de Experience Builder (`https://localhost:3001`), abre tu aplicación y arrastra el widget **Contador de Visitas SIMCOT** desde la pestaña **Personalizado**.
4. En el panel lateral de ajustes puedes configurar el título, la URL de ArcGIS Online y los IDs de ítems a consultar.

---

## 📁 Estructura del Repositorio

```text
contador-visitas-simcot/
├── index.html          # Widget web autónomo responsive (para GitHub Pages / StoryMaps)
├── manifest.json       # Manifiesto oficial del widget para ArcGIS Experience Builder
├── config.json         # Configuración predeterminada de ítems y fuentes de datos
├── icon.svg            # Ícono oficial del widget para la barra de herramientas ExB
├── README.md           # Documentación técnica de integración y marca
├── .nojekyll           # Compatibilidad con GitHub Pages
├── src/                # Código fuente en React 18 + TypeScript
│   ├── config.ts       # Definición de tipos y configuraciones
│   ├── runtime/
│   │   └── widget.tsx  # Lógica del contador, odómetro y llamadas REST
│   └── setting/
│       └── setting.tsx # Panel de propiedades para el Experience Builder
└── dist/               # Bundles JavaScript compilados y optimizados
    ├── runtime/
    │   └── widget.js   # Bundle de ejecución (69 KB)
    └── setting/
        └── setting.js  # Bundle de ajustes (24 KB)
```

---

## 🔒 Fuente de Datos Oficial

- **ArcGIS Online REST API**: Consulta en tiempo real a `https://www.arcgis.com/sharing/rest/content/items/6b45024fb7a247219c33adc524345589?f=json`
- **Métrica Principal**: `numViews` (Vistas oficiales acumuladas en la plataforma Esri).