import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ShopItem } from "./shopitem.entity";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public name!: String;

  @OneToMany(type => ShopItem, shopItem => shopItem.brand)
  @JoinColumn()
  public items!: ShopItem[];
}