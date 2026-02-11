import { PetEspecie } from "../../entities/PetEspecie";

export default interface InterfacePetEspecieRepository {
    buscaEspecie(PeId: number): void;
}