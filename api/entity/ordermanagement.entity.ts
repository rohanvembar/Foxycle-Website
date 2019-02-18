import { Column, Entity, PrimaryColumn, ManyToMany } from "typeorm";
@Entity()
export class OrderManagement {
    @PrimaryColumn()
    public orderNumber!: number;

    @Column()
    public status!: number;

    @Column()
    public dateOrdered!: string;

    @Column()
    public mailingAddress!: string;

}