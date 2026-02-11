import Pet from "../../entities/Pet";

export default interface InterfacePetService {
    criarPet(data: Partial<Pet>): Promise<Pet>;
    listaPet(): Promise<Pet[]>;
    atualizaPet(PetId: number, data: Partial<Pet>): Promise<void>;
    desativaPet(PetId: number): Promise<void>;
}