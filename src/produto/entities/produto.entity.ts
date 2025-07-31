import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produtos"}) // nome da tabela produtos
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    categoria: string

    @IsNotEmpty()
    @Column("decimal", { precision: 10, scale: 2 })
    preco: number

    @IsNotEmpty()
    @Column()
    quantidade: number


}
