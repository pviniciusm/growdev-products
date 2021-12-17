import { Request, Response, Router } from "express";
import { ProductController } from "./ProductController";

const productRoutes = Router();

productRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const result = await new ProductController().list();

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

productRoutes.get("/join", async (req: Request, res: Response) => {
    try {
        const result = await new ProductController().listWithJoin();

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

productRoutes.post("/", async (req: Request, res: Response) => {
    try {
        const { nome, descricao, categoria } = req.body;
        const result = await new ProductController().create(nome, descricao, categoria);

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

export { productRoutes };