import { Connection, getConnection, Repository } from "typeorm";
import { Category } from "../../models/category";

export class CategoryController {
    private readonly connection: Connection;
    private readonly repository: Repository<Category>;

    constructor() {
        this.connection = getConnection();
        this.repository = getConnection().manager.getRepository(Category);
    }

    async create(name: string, description: string, tag: number) {
        try {
            await this.connection.query(
                `INSERT INTO produtos.categoria 
                (nome, descricao, tag)
                VALUES
                ($1, $2, $3)
                `, [name, description, tag]
            );
    
            return {
                ok: true
            }
        } catch (error) {
            return {
                ok: false,
                error
            }
        }
    }

    async createWithEntity(name: string, description: string, tag: number) {
        try {
            let category = await this.connection.manager.create(Category, {
                nome: name, 
                descricao: description,
                tag
            });

            this.connection.manager.save(category);

            return {
                ok: true
            }
        } catch (error) {
            return {
                ok: false,
                error
            }
        }
    }

    async list() {
        let result = await this.connection.query(
            `SELECT * FROM produtos.categoria`
        );

        return {
            ok: true,
            data: result
        }
    }

    async listWithEntityManager() {
        // let result = await this.connection.manager.find(Category, {
        //     where: {
        //         nome: "Comida"
        //     }
        // });

        let result = await this.connection.manager.count(Category);

        return {
            ok: true,
            data: result
        }
    }

    async listWithRepository() {
        let result = await this.repository.find();

        return {
            ok: true,
            data: result
        }
    }
}