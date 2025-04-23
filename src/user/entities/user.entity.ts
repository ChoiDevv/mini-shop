import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  user_idx: number;
}