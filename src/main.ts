import express from "express";

import { initConnection } from "./database/connection";
import { categoryRoutes } from "./features/categories/CategoryRoutes";
import { productRoutes } from "./features/products/ProductRoutes";

const app = express();
app.use(express.json());

app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

initConnection()
    .then(() => app.listen(8081, () => console.log("Server iniciou")))
    .catch((error) => {
        console.log("Error at creating connection with database");
        console.log(error);
    });
