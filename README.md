# Inbiot Full Stack Test

Proyecto de prueba técnica con stack MERN simplificado.
Actualmente está implementada la parte de backend con servidor Express, conexión a MongoDB Atlas y un widget de calidad del aire con datos de OpenAQ.

## 🌐 Demo online

El proyecto puede probarse directamente aquí:  
➡️ [Frontend en Vercel](https://inbiot-fullstack-test.vercel.app)  
➡️ [Backend en Render](https://inbiot-fullstack-test.onrender.com)


---

## 🚀 Backend

### Tecnologías

* Node.js + Express
* MongoDB Atlas + Mongoose
* Dotenv
* CORS
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

## 📌 Próximos pasos

* Mejorar búsqueda de calidad del aire por nombre de ciudad.
* Añadir validaciones y tests.
* Completar documentación final.
