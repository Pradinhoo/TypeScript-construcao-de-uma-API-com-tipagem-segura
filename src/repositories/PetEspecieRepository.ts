import { Repository } from "typeorm";
import InterfacePetEspecieRepository from "./interfaces/InterfacePetEspecieRepository";
import { PetEspecie } from "../entities/PetEspecie";


export default class PetEspecieRepository implements InterfacePetEspecieRepository {
    constructor(private readonly petEspecieRepository: Repository<PetEspecie>) {}
    
    async buscaEspecie(PeId: number): Promise<Partial<PetEspecie> | null> {
        return await this.petEspecieRepository.findOne({ 
            select: { PeEspecie: true },
            where: { PeId: PeId } });
    }
}