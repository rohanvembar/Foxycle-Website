import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../entity";
@Entity()
export class Announcement {
  @PrimaryGeneratedColumn()
  public id!: number;

   @Column()
  public title!: string;

   @Column()
  public date!: string;

   @Column()
  public body!: string;
}