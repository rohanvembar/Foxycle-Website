import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Category } from "./category.entity";
import { Brand } from "./brand.entity";

@Entity()
export class ShopItem {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name!: string;

    @Column()
    public price!: number;

    @Column({default: 0})
    public saleprice!: number;

    @ManyToOne(type => Brand, brand => brand.items, { onDelete: 'CASCADE' })
    @Column({name: "brandId"})
    public brand!: number;

    @ManyToMany(type => Category)
    @JoinTable()
    @Column()
    public categoryId!: number;

    @Column()
    public image!: string;

    @Column({default: 0})
    public delivery!: boolean;

    @Column({default: 1})
    public quantity!: number;

    @Column({ type: "mediumtext" })
    public description!: string;
}