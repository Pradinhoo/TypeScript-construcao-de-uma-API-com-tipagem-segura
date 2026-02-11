import { Repository } from "typeorm";
import InterfacePetRepository from "./interfaces/InterfacePetRepository";
import Pet from "../entities/Pet";


export default class PetRepository implements InterfacePetRepository {
    constructor(private readonly petRepository: Repository<Pet>) {}

    async criaPet(pet: Partial<Pet>): Promise<Pet> {
        return await this.petRepository.save(pet);
    }

    async listaPet(): Promise<Pet[]> {
        return await this.petRepository.find({
            relations: ['especie'] 
        });
    }

    async atualizaPet(PetId: number, pet: Partial<Pet>): Promise<void> {
        await this.petRepository.update(PetId, pet)
    }

    async desativaPet(PetId: number): Promise<void> {
        await this.petRepository
            .createQueryBuilder()
            .update(Pet)
            .set({ PetAtivo: false })
            .where("PetId = :PetId", { PetId: PetId })
            .execute()
    }
}