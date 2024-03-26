import { Router} from "express";
import PlantController from "../controllers/PlantController";

const plantRouter = Router();
// Instanciation d'un plantController
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
    plantController.getAllPlants(req, res);
  });

plantRouter.get("/id/:id", (req, res) => {
    plantController.getPlantById(req, res);
  });
  

export default plantRouter;