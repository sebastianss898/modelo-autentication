import Express from "express";
import morgan from "morgan";
import pkg from "..//package.json";

import productsRoutes from "./routes/products.routes";

const app = Express();

app.set("pkg", pkg);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    Nombre: app.get("pkg").name,
    Autor: app.get("pkg").author,
    Aescripcion: app.get("pkg").description,
    Version: app.get("pkg").version,
  });
});

app.use("/products", productsRoutes );

export default app;
