import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
@Entity()
export class OrderManagement {
    @PrimaryGeneratedColumn()
    public orderNumber!: number;

    @Column()
    public status!: number;

    @Column()
    public dateOrdered!: string;

    @Column()
    public mailingAddress!: string;

}