import { getConnection } from "../database/connection";

export class GrowdeverController {
    async create(nome: string, idade: number, cidade?: string) {
        let connection = getConnection();

        let count = await connection.manager.query(
            `
            insert into growdevers.growdever
            (nome, idade, cidade)
            values
            ($1, $2, $3)
        `,
            [nome, idade, cidade]
        );

        return count;
    }

    async list() {
        let connection = getConnection();

        let growdevers = await connection.manager.query(`
            select * from growdevers.growdever
        `);

        return growdevers;
    }

    async update(id: string, idade: number, cidade: string) {
        let connection = getConnection();

        let params = [id, idade];

        let query = `
            update growdevers.growdever set
            idade = $2
        `;

        if (cidade) {
            query += ", cidade = $3";
            params.push(cidade);
        }

        query += "where id = $1";

        let result = await connection.manager.query(query, params);

        return result;
    }
}
