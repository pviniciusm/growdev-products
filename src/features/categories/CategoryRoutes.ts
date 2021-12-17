import { Request, Response, Router } from "express";
import { CategoryController } from "./CategoryController";

const categoryRoutes = Router();
//const controller = new CategoryController();

categoryRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const result = await new CategoryController().list();

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

categoryRoutes.get("/entity", async (req: Request, res: Response) => {
    try {
        const result = await new CategoryController().listWithEntityManager();

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

categoryRoutes.get("/repository", async (req: Request, res: Response) => {
    try {
        const result = await new CategoryController().listWithRepository();

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

categoryRoutes.post("/", async (req: Request, res: Response) => {
    try {
        const { nome, descricao, tag } = req.body;
        const result = await new CategoryController().createWithEntity(nome, descricao, tag);

        return res.status(200).send(result); 
    } catch(error) {
        return res.status(500).send({
            ok: false,
            error
        });
    }
});

export { categoryRoutes };