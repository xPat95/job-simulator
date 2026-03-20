require("dotenv").config();
const app = require("./src/app");
const { connectWithRetry } = require("./src/db");

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await connectWithRetry();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("No se pudo iniciar la aplicación:", error.message);
    process.exit(1);
  }
}

startServer();