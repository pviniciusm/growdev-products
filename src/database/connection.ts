import {
    createConnection,
    getConnection as getTypeOrmConnection,
} from "typeorm";

export const initConnection = async () => createConnection();

export const getConnection = () => {
    let conn = getTypeOrmConnection();

    if (!conn) {
        throw new Error("Database is not connected");
    }

    return conn;
};
