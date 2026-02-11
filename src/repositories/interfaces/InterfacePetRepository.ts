import Pet from "../../entities/Pet";

export default interface InterfacePetRepository {
    criaPet(pet: Partial<Pet>): Promise<Pet>;
    listaPet(): Promise<Pet[]>;
    atualizaPet(PetId: number, pet: Partial<Pet>): void;
    desativaPet(PetId: number): void;
}