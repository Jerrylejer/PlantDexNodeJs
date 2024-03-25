import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Plant {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ nullable: false })
    nom?: string;

    @Column({ nullable: false })
    soleil?: string;

    @Column({ nullable: false })
    arrosage?: number;

    @Column({ nullable: false })
    categorie?: string;

    @Column({ nullable: false })
    image?: string
}