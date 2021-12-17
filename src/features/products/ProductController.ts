import { Connection, getConnection } from "typeorm";

export class ProductController {
    private readonly connection: Connection;

    constructor() {
        this.connection = getConnection();
    }

    async create(name: string, description: string, categoria: string) {
        try {
            await this.connection.query(
                `INSERT INTO produtos.produto 
                (nome, descricao, categoria_uid)
                VALUES
                ($1, $2, $3)
                `, [name, description, categoria]
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

    async list() {
        let result = await this.connection.query(
            `SELECT * FROM produtos.produto`
        );

        return {
            ok: true,
            data: result
        }
    }

    async listWithJoin() {
        let result = await this.connection.query(
            `SELECT 
                pro.*, cat.nome as cat_nome, cat.descricao as cat_descricao 
            FROM produtos.produto pro
            JOIN produtos.categoria cat
             ON cat.uid = pro.categoria_uid
            `
        );

        return {
            ok: true,
            data: result
        }
    }
}