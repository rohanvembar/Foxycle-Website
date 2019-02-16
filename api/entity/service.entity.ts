import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public title!: string;

    @Column()
    public price!: number;

    @Column()
    public description!: string;

    @Column()
    public category!: string;
}