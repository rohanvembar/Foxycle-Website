import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
@Entity()
export class ShopItem {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name!: string;

    @Column()
    public price!: number;

    @Column()
    public brand!: string;

    // add many to many
    @Column()
    public categories!: string;

    @Column()
    public image!: string;

    @Column({default: 0})
    public delivery!: boolean;

    @Column({default: 1})
    public quantity!: number;

    @Column()
    public description!: string;
}