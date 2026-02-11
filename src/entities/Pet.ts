import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PetEspecie } from "./PetEspecie";

@Entity("tblPet")
export default class Pet {
    @PrimaryGeneratedColumn()
    PetId: number;

    @Column()
    PetNome: string;

    @Column()
    PeId: number;

    @ManyToOne(() => PetEspecie, (especie) => especie.pets)
    @JoinColumn({ name: 'PeId' })
    especie: PetEspecie;

    @Column()
    PetDataNascimento: Date;

    @Column()
    PetAdotado: boolean;
    
    @Column()
    PetAtivo: boolean;
}