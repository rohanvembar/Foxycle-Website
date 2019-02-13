import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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