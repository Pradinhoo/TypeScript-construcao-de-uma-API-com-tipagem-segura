import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Pet from "./Pet";

@Entity("tblPetEspecie")
export class PetEspecie {

    private static readonly GATO = 1;
    private static readonly CACHORRO = 2;

    @PrimaryGeneratedColumn()
    PeId: number;

    @Column()
    PeEspecie: string;

    @OneToMany(() => Pet, (pet) => pet.especie)
    pets: Pet[];
}