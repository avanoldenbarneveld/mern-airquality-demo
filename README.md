# Inbiot Full Stack Test

Proyecto de prueba técnica con stack MERN simplificado.
Actualmente está implementada la parte de backend con servidor Express, conexión a MongoDB Atlas y un widget de calidad del aire con datos de OpenAQ.

## 🌐 Demo online

El proyecto puede probarse directamente aquí:

➡️ [Backend en Render](https://inbiot-fullstack-test.onrender.com)

➡️ [Frontend en Vercel](https://inbiot-fullstack-test.vercel.app)

Se debe acceder en primer lugar al backend para despertar el servicio, y acto seguido estarán los datos disponibles en el frontend.

---

## 🚀 Backend

### Tecnologías

* Node.js + Express
* MongoDB Atlas + Mongoose
* Dotenv
* OpenAQ API

### Estructura

```
server/
 ├── .env
 ├── package.json
 └── src/
     ├── db.js
     ├── index.js
     ├── models/
     │    └── Items.js
     └── routes/
          └── airquality.js
```

### Variables de entorno

```
PORT=4000
MONGODB_URI=<connection string de MongoDB Atlas>
OPENAQ_API_KEY=<tu API key de OpenAQ>
```

### Scripts

```bash
cd server
npm install
npm run dev
```

### Endpoints

* `GET /health` → comprueba que el servidor responde.
* `GET /api/items` → lista todos los items.
* `POST /api/items` → crea un nuevo item.
* `GET /api/airquality?lat=<lat>&lon=<lon>` → devuelve calidad del aire para coordenadas.

### Deployment

El backend está desplegado en Render:

```
https://inbiot-fullstack-test.onrender.com
```

### Tests unitarios

El proyecto incluye **tests unitarios básicos** en la carpeta `server/tests/`, implementados con **Jest** y **Supertest**. Cubren:

* Healthcheck (`/health`).
* Lectura de items (`GET /api/items`).
* Creación de items (`POST /api/items`).

Para ejecutarlos:

```bash
cd server
npm test
```

---

## 💻 Frontend

### Tecnologías

* React + Vite

### Funcionalidades

* Lista de items desde backend.
* Formulario para añadir nuevos items.
* Widget de calidad del aire (OpenAQ) mostrando parámetros medidos.

### Scripts

```bash
cd client
npm install
npm run dev
```

### Deployment

El frontend está desplegado en Vercel:

```
https://inbiot-fullstack-test.vercel.app
```

---

## ⚙️ Decisiones técnicas

* **Express + Node.js**: Tenía experiencia previa con las dos y encaja perfecto con las necesidades de este proyecto.
* **React + Vite**: También tenía experiencia previa con estas dos, y tambiénn encajan perfectamente con las necesidades del proyecto.
* **MongoDB Atlas (NoSQL)**: venía de SQL, pero he querido utilizar una base no relacional para probar el stack MERN. Atlas facilita mucho el despliegue y credenciales.

---

## ▶️ Cómo levantar el proyecto en local

1. Clonar el repositorio.
2. Crear dos ficheros `.env`:

   * En `server/.env` incluir `PORT`, `MONGODB_URI` y `OPENAQ_API_KEY`.
   * En `client/.env` incluir `VITE_API_URL=http://localhost:4000`.
3. Instalar dependencias y lanzar backend:

   ```bash
   cd server
   npm install
   npm run dev
   ```
4. En otra terminal, lanzar frontend:

   ```bash
   cd client
   npm install
   npm run dev
   ```
5. Abrir `http://localhost:5173` en el navegador.

---