import {Column, Entity, PrimaryGeneratedColumn} from "typeORM";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    image: string
}