import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Category } from "./category.entity";
@Entity()
export class ShopItem {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name!: string;

    @Column()
    public price!: number;

    @Column()
    public saleprice!: number;

    @Column()
    public brand!: string;

    @ManyToMany(type => Category)
    @JoinTable()
    @Column()
    public categories!: string;

    @Column()
    public image!: string;

    @Column({default: 0})
    public delivery!: boolean;

    @Column({default: 1})
    public quantity!: number;

    @Column({ type: "mediumtext" })
    public description!: string;
}