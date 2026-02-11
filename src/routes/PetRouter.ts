import express from "express";
import { PetController } from "../controllers/PetController";
import PetRepository from "../repositories/PetRepository";
import PetEspecieRepository from "../repositories/PetEspecieRepository";
import PetService from "../services/PetService";
import { AppDataSource } from "../config/DataSource";
import Pet from "../entities/Pet";
import { PetEspecie } from "../entities/PetEspecie";

const router = express.Router();

const petRepository = new PetRepository(AppDataSource.getRepository(Pet));
const petEspecieRepository = new PetEspecieRepository(AppDataSource.getRepository(PetEspecie));

const petService = new PetService(petRepository, petEspecieRepository);

const petController = new PetController(petService)

router.post("/", (req, res) => petController.criarPet(req, res));
router.get("/", (req, res) => petController.listarPet(req, res));
router.put("/", (req, res) => petController.atualizarPet(req, res));
router.delete("/", (req, res) => petController.desativarPet(req, res));

export default router;