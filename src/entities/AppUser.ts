import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Appuser {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: false })
    username?: string;

    @Column({ nullable: false })
    email?: string;

    @Column({ nullable: false })
    pwd?: string;
}