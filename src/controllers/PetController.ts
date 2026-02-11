import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";

let listaDePets: Array<TipoPet> = [];

export class PetController {
    public static async criarPet(req: Request, res: Response) {
        const { id, nome, especie, idade, adotado } = <TipoPet> req.body;

        const novoPet: TipoPet = { id, nome, especie, idade, adotado }

        listaDePets.push(novoPet);

        return res.status(201).json(novoPet);
    };

    public static async listarPets(req: Request, res: Response) {
        return res.status(200).json(listaDePets);
    };

    public static async atualizarPet(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, especie, idade, adotado } = <TipoPet> req.body;
        const pet = listaDePets.find((pet) => pet.id === Number(id));

        if (!pet) {
            return res.status(404).json({ erro: "PET não encontrado." });
        };

        pet.nome = nome;
        pet.especie = especie;
        pet.idade = idade;
        pet.adotado = adotado;

        return res.status(200).json(pet);
    };

    public static async deletarPet(req: Request, res: Response) {
        const { id } = req.params;
        const pet = listaDePets.find((pet) => pet.id === Number(id));

        if (!pet) {
            return res.status(404).json({ erro: "PET não encontrado." });
        };

        const index = listaDePets.indexOf(pet);
        listaDePets.splice(index, 1);
        return res.status(200).json({ mensagem: "PET deletado com sucesso." })
    };
};