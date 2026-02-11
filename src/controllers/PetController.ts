import { Request, Response } from "express";
import InterfacePetService from "../services/interfaces/InterfacePetService";
import { HttpHandler } from "../utils/HttpHandler";

export class PetController {
    constructor(private readonly petService: InterfacePetService) {}

    public async criarPet(req: Request, res: Response) {
        try {
            const data = {
                PetNome: req.body.PetNome,
                PeId: req.body.PeId,
                PetDataNascimento: req.body.PetDataNascimento,
                PetAdotado: req.body.PetAdotado
            }

            const novoPet = await this.petService.criarPet(data);

            return res.status(HttpHandler.CREATED).json({ 
                status: true,
                msg: "PET criado com sucesso!",
                data: novoPet
            });

        } catch (error: any) {
            console.error("[PetController.criarPet()] Erro ao tentar criar um novo Pet", error);
            return res.status(HttpHandler.INTERNAL_SERVER_ERROR).json({ 
                status: false,
                msg: "Erro interno ao tentar criar um novo Pet."
            })
        }
    }

    public async listarPet(req: Request, res: Response) {
        try {
            const listaDePets = await this.petService.listaPet();

            return res.status(HttpHandler.OK).json({ 
                status: true,
                msg: "Dados encontrados",
                data: listaDePets
             })
        } catch (error: any) {
            console.error("[PetController.listarPet()] Erro ao tentar listar Pets", error);
            return res.status(HttpHandler.INTERNAL_SERVER_ERROR).json({ 
                status: false,
                msg: "Erro interno ao tentar listar os Pets."
            })
        }
    }

    public async atualizarPet(req: Request, res: Response) {
        try {
            const PetId = req.body.PetId;
            const data = {
                PetNome: req.body.PetNome,
                PeId: req.body.PeId,
                PetDataNascimento: req.body.PetDataNascimento,
                PetAdotado: req.body.PetAdotado,
                PetAtivo: req.body.PetAtivo
            };

            const petAtualizado = await this.petService.atualizaPet(PetId, data);

            return res.status(HttpHandler.OK).json({
                status: true,
                msg: "Pet atualizado com sucesso.",
                data: petAtualizado
            })

        } catch (error: any) {
            console.error("[PetController.atualizarPet()] Erro ao tentar atualizar Pet", error);
            return res.status(HttpHandler.INTERNAL_SERVER_ERROR).json({ 
                status: false,
                msg: "Erro interno ao tentar atualizar Pet."
            })
        }
    }

    public async desativarPet(req: Request, res: Response) {
        try {
            const PetId = req.body.PetId;

            await this.petService.desativaPet(PetId);

            return res.status(HttpHandler.OK).json({
                status: true,
                msg: "Pet desativado com sucesso."
            })
        } catch (error: any) {
            console.error("[PetController.desativarPet()] Erro ao tentar desativar Pet", error);
            return res.status(HttpHandler.INTERNAL_SERVER_ERROR).json({ 
                status: false,
                msg: "Erro interno ao tentar desativar Pet."
            })
        }
    }
};