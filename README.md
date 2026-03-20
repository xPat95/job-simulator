# ⚽ CRUD API Full Stack con Docker 🐳

---

## 🚀 Descripción

Este proyecto implementa una **API RESTful con operaciones CRUD** utilizando **Node.js (Express)** y **PostgreSQL**, junto con un **frontend integrado** servido con **nginx**.

Todo el sistema corre con **Docker Compose en un solo comando**, cumpliendo con la integración full stack solicitada.

---

## 🧩 Tecnologías utilizadas

* ⚙️ Node.js + Express
* 🐘 PostgreSQL
* 🌐 HTML + CSS + JavaScript (Frontend)
* 🐳 Docker & Docker Compose
* 🌱 dotenv

---

## 🏗️ Arquitectura

El sistema está dividido en tres servicios:

* 🐘 **db** → Base de datos PostgreSQL
* 🚀 **api** → Backend con Node.js
* 🌐 **frontend** → Interfaz de usuario con nginx

Todo se levanta con:

```bash
docker compose up --build
```

---

## 📦 Estructura del proyecto

```bash
job-simulator/
│
├── backend/
│   ├── src/
│   ├── server.js
│   ├── init.sql
│   ├── Dockerfile
│   ├── .env
│   └── .env.example
│
├── frontend/
│   ├── public/
│   ├── Dockerfile
│   └── nginx.conf
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
  "campo1": "Mouse",
  "campo2": "Periférico",
  "campo3": "Logitech",
  "campo4": 15,
  "campo5": 149.99,
  "campo6": true
}
```

---

## 🎨 Personalización del frontend

El frontend fue adaptado para mostrar nombres de dominio reales en lugar de los campos genéricos:

| Backend | Frontend   |
| ------- | ---------- |
| campo1  | Nombre     |
| campo2  | Categoría  |
| campo3  | Marca      |
| campo4  | Stock      |
| campo5  | Precio     |
| campo6  | Disponible |

👉 Importante:
El backend mantiene los nombres `campo1...campo6` para conservar el contrato de la API, mientras que el frontend se encarga de mostrar nombres más claros al usuario.

---

## 🗄️ Datos iniciales

Se incluyen datos de prueba en `init.sql`, los cuales se cargan automáticamente al iniciar la base de datos:

```sql
INSERT INTO products (campo1, campo2, campo3, campo4, campo5, campo6) VALUES
('Mouse', 'Periférico', 'Logitech', 15, 149.99, true),
('Teclado', 'Periférico', 'Redragon', 10, 299.99, true),
('Monitor', 'Pantalla', 'Samsung', 5, 1299.50, true),
('Laptop', 'Computadora', 'Dell', 3, 5999.99, true),
('Audífonos', 'Audio', 'Sony', 20, 499.99, false);
```

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

3. Acceder a los servicios:

* 🌐 Frontend → http://localhost:8088
* 🚀 API → http://localhost:8080/products

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

## 🐳 Docker Compose

El archivo `docker-compose.yml` permite levantar todos los servicios de forma conjunta:

* Base de datos persistente con volumen
* Backend conectado a PostgreSQL
* Frontend consumiendo la API automáticamente

---

## 🏁 Nivel alcanzado

✅ NIVEL 2
✅ Integración Frontend
✅ Personalización del Frontend