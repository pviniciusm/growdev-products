import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "categoria", schema: "produtos" })
export class Category {
    @PrimaryColumn()
    uid: string;

    @Column()
    nome: string;
    
    @Column()
    descricao: string;

    @Column()
    tag: number;
}
