import express from "express";
import { PetController } from "../controllers/PetController";

const router = express.Router();

const petController = new PetController();

router.post("/", PetController.criarPet);
router.get("/", PetController.listarPets);
router.post("/:id", PetController.atualizarPet);
router.get("/:id", PetController.deletarPet);

export default router;