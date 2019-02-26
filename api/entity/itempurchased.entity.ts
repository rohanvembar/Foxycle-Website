import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
@Entity()
export class ItemPurchased {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public orderNumber!: number;

    @Column()
    public itemId!: number;

    @Column()
    public quantity!: number;

    @Column()
    public subtotal!: number;

}