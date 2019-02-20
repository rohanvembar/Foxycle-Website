import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public monHours!: string;

  @Column()
  public tueHours!: string;

  @Column()
  public wedHours!: string;

  @Column()
  public thuHours!: string;

  @Column()
  public friHours!: string;

  @Column()
  public satHours!: string;

  @Column()
  public sunHours!: string;

  @Column()
  public phoneNumber!: string;

  @Column()
  public address!: string;

  @Column()
  public email!: string;

  @Column()
  public map!: string;
}