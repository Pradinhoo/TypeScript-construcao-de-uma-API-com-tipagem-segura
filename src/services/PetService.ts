import Pet from "../entities/Pet";

import InterfacePetService from "./interfaces/InterfacePetService";
import InterfacePetEspecieRepository from "../repositories/interfaces/InterfacePetEspecieRepository";
import InterfacePetRepository from "../repositories/interfaces/InterfacePetRepository";

export default class PetService implements InterfacePetService {
    constructor(
        private readonly petRepository: InterfacePetRepository,
        private readonly petEspecieRepository: InterfacePetEspecieRepository
    ) {}

    public async criarPet(data: Partial<Pet>): Promise<Pet> {
        try {
            if (!data.PetNome || !data.PetNome || !data.PeId || !data.PetDataNascimento || !data.PetAdotado) {
                throw new Error("Dados passados inválidos, favor verificar e tentar novamente!");
            }

            const especie = this.petEspecieRepository.buscaEspecie(data.PeId);

            if (especie === null) {
                throw new Error("Espécie não encontrada no banco de dados!");
            }

            return await this.petRepository.criaPet(data);
        } catch (error: any) {

        }
    }

    public async listaPet(): Promise<Pet[]> {
        try {
            return await this.petRepository.listaPet();
        } catch (error: any) {

        }
    }

    public async atualizaPet(PetId: number, data: Partial<Pet>): Promise<void> {
        try {
            await this.petRepository.atualizaPet(PetId, data);
        } catch (error: any) {

        }
    }

    public async desativaPet(PetId: number): Promise<void> {
        try {
            await this.petRepository.desativaPet(PetId);
        } catch (error: any) {

        }
    }


}