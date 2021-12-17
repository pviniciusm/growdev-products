module.exports = {
    type: "postgres",
    host: "ec2-52-20-143-167.compute-1.amazonaws.com",
    port: 5432,
    username: "gtnzvpwztgrttj",
    password:
        "3aeb3eb520a2fe9cb3cb06ecce280ab0bb34472ca54ba3b839ea761e666f956c",
    database: "d2of6ib79e96id",
    schema: "growdevers",
    entities: [
        'src/models/**/*.ts'
    ],
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
