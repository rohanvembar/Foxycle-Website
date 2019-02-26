import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public categoryId!: number;

    @Column()
    public category!: string;
}