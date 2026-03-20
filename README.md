# ⚽ CRUD API con Docker + PostgreSQL 🔵🔴

---

## 🚀 Descripción

Este proyecto implementa una API RESTful con operaciones CRUD utilizando **Node.js (Express)** y **PostgreSQL**, todo orquestado con **Docker Compose** 🐳.

El sistema permite gestionar un recurso llamado `products`, cumpliendo con un contrato específico de campos (`campo1` a `campo6`) y validaciones estrictas.

👉 Todo el entorno puede levantarse con un solo comando:

```bash
docker compose up --build
```

---

## 🧩 Tecnologías utilizadas

* ⚙️ Node.js + Express
* 🐘 PostgreSQL
* 🐳 Docker & Docker Compose
* 🌱 dotenv

---

## 📦 Estructura del proyecto

```bash
job-simulator/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── db.js
│   │   ├── routes.js
│   │   └── validate.js
│   │
│   ├── server.js
│   ├── init.sql
│   ├── Dockerfile
│   ├── .env
│   └── .env.example
│
├── docker-compose.yml
└── README.md
```

---

## 🧠 Funcionalidad (CRUD)

| Método | Endpoint        | Descripción                 |
| ------ | --------------- | --------------------------- |
| GET    | `/products`     | Obtener todos los productos |
| GET    | `/products/:id` | Obtener un producto por ID  |
| POST   | `/products`     | Crear un producto           |
| PUT    | `/products/:id` | Actualizar un producto      |
| DELETE | `/products/:id` | Eliminar un producto        |

---

## 📄 Formato del recurso

```json
{
  "id": 1,
  "campo1": "string",
  "campo2": "string",
  "campo3": "string",
  "campo4": 10,
  "campo5": 149.99,
  "campo6": true
}
```

---

## ✅ Validaciones

* Todos los campos son obligatorios
* Tipos estrictos:

  * `campo1`, `campo2`, `campo3` → string
  * `campo4` → integer
  * `campo5` → number
  * `campo6` → boolean

---

## ⚙️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone <repo-url>
cd job-simulator
```

2. Levantar el sistema:

```bash
docker compose up --build
```

3. Acceder a la API:

```bash
http://localhost:8080/products
```

---

## 🧪 Ejemplo de uso (POST)

```json
{
  "campo1": "Mouse",
  "campo2": "Periferico",
  "campo3": "Logitech",
  "campo4": 10,
  "campo5": 149.99,
  "campo6": true
}
```

---

## 🔐 Variables de entorno

```env
PORT=8080
DB_HOST=db
DB_PORT=5432
DB_NAME=cruddb
DB_USER=postgres
DB_PASSWORD=postgres
```

---

## 🐳 Docker

El sistema se compone de dos servicios:

* 🐘 `db`: PostgreSQL
* 🚀 `api`: backend en Node.js

Todo definido en `docker-compose.yml`.