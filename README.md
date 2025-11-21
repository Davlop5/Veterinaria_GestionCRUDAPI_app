📝 Nota para el Profesor

Estimado profesor, cordial saludo.

Debido a algunos inconvenientes desafortunados en mi entorno de trabajo, una parte importante del proyecto original se perdió y tuve que reiniciar la estructura desde cero. Sin embargo, ya retomé completamente el proceso y estoy avanzando nuevamente paso a paso.

Aunque el repositorio actualmente no alcanza aún el 40% del desarrollo esperado, continuaré realizando commits progresivos y frecuentes, subiendo avances por secciones (interfaces, integración de API, CRUD, login, etc.) hasta completar el proyecto de la mejor manera posible y abarcar lo mas posible para el momento en que puedas realizar la evaluación, y gracias

Agradezco su comprensión y tiempo mientras continúo subiendo los cambios.

🔷 Documento Técnico v1.0 — Veterinaria_GestionCRUDAPI_app

Aplicación móvil desarrollada en React Native (Expo), orientada a la gestión de una veterinaria y al consumo de una API pública que retorna información e imágenes de animales.

 1. Descripción General del Sistema

El sistema es una aplicación móvil híbrida que permite:

Consultar animales desde una API externa (imágenes + datos).

Registrar, listar, editar y eliminar productos o elementos (módulo CRUD).

Autenticación básica mediante Login (versión inicial).

Navegación estructurada por pantallas.

Posible escalabilidad a un sistema administrativo completo para una veterinaria.

El propósito académico es aplicar conceptos de backend–frontend, consumo de APIs, manejo de estado y lógica de negocio.

 2. Características Principales
✔ 2.1 Consumo de API de Animales

Obtiene imágenes y datos mediante HTTP GET.

Se integra desde el frontend usando fetch o Axios.

Se mostrará una lista con:

Foto

Nombre

Especie

Datos básicos

✔ 2.2 Sistema CRUD (Create, Read, Update, Delete)

Módulo para gestionar productos, medicamentos o elementos administrativos.

Funcionalidades CRUD:

Create → agregar un producto/animal/insumo.

Read → listar todos los registros almacenados.

Update → editar los datos desde un formulario.

Delete → eliminar un elemento de la base de datos.

El CRUD actualmente apunta a un backend local (ej. http://localhost:8081/). En futuras versiones podrá migrar a Firestore o MySQL.

✔ 2.3 Sistema de Login

Autenticación básica (usuario/contraseña).

Validaciones simples en frontend.

Estructura escalable para integrar Firebase Authentication si se requiere posteriormente.

 3. Arquitectura del Proyecto
🔷 Patrón general:
Frontend (Expo / React Native)
   ↳ Hooks
   ↳ Componentes
   ↳ Pantallas (screens)
   ↳ Estilos globales
API externa (animales)
Backend CRUD (local / Express)

🔷 Tipo de arquitectura:

➡ Arquitectura basada en módulos, organizada en carpetas que representan funciones específicas del sistema.

 4. Estructura del Proyecto
RestauranteTaller2 /  (será renombrado)
│
├─ src/
│  ├─ assets/          → imágenes, íconos
│  ├─ components/      → componentes reutilizables
│  ├─ constants/       → theme.ts y configuración general
│  ├─ hooks/           → lógica reutilizada
│  ├─ screens/         → AddProduct, ProductList, Login, etc.
│  ├─ styles/          → estilos globales
│  └─ .config/         → firebase.js (opcional)
│
├─ App.js
├─ package.json
├─ README.md
└─ app.json

🔷 5. Requerimientos Técnicos

Node.js 18+

Expo SDK 51+

Android Studio o dispositivo físico

Git para versionamiento

PowerShell para comandos

 6. Flujo de Versionamiento Git (Ramas aconsejadas)

Se recomienda trabajar con:

main                → rama estable
dev                 → rama de desarrollo
feature/api         → consumo de API
feature/crud        → CRUD completo
feature/login       → Login
feature/ui          → diseño y estilos


Comandos clave:

git checkout -b feature/api
git add .
git commit -m "Consumo de API implementado"
git push -u origin feature/api

 7. Cómo ejecutar el proyecto
npm install
npx expo start

 8. Estado Actual del Proyecto (v1.0)

Estructura base en Expo ✔

Carpetas y arquitectura definidas ✔

CRUD inicial creado ✔

API de animales integrada ✔

Login en progreso ✔

Documentación técnica creada ✔

Fin del Documento Técnico v1.0
