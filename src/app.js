import express from "express";
import { engine } from "express-handlebars";
// import sessionRouter from "./routes/session.router.js";
import viewsRouter from "./routes/views.router.js";

// INSTANCIANDO SERVER
const app = express();

// DEFINIENDO PUERTO
const PORT = 8080;

// Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express-Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

// RUTAS
app.use("/", viewsRouter);
// app.use("/api/sessions", sessionRouter);

app.listen(PORT, () => {
  console.log(`Server listen in port ${PORT}`);
});
