# Inbiot Full Stack Test

Proyecto de prueba técnica con stack MERN simplificado.
Actualmente está implementada la parte de backend, con servidor Express y conexión a MongoDB Atlas.

---

## 🚀 Backend

### Tecnologías

* Node.js + Express
* MongoDB Atlas + Mongoose
* Dotenv
* CORS

### Estructura

```
server/
 ├── .env
 ├── package.json
 └── src/
     ├── db.js
     ├── index.js
     └── models/
         └── Items.js
```

### Variables de entorno

```
PORT=4000
MONGODB_URI=<connection string de MongoDB Atlas>
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

---

## 📌 Próximos pasos

* Implementar frontend en React.
* Consumir API externa.
* Completar README con instrucciones finales.
