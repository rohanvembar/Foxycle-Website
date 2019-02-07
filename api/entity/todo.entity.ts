import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "../entity";
@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public title!: string;

  @Column()
  public complete!: boolean;

  @Column()
  public dueDate!: string;

  @ManyToOne((type) => User, { cascade: true })
  @JoinColumn()
  public user!: User;
}
