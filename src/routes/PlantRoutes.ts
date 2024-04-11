import { Router} from "express";
import PlantController from "../controllers/PlantController";
import checkToken from "../middleware/CheckToken";

const plantRouter = Router();
// Instanciation d'un plantController
const plantController = new PlantController();

plantRouter.get("", (req, res) => {
    plantController.getAllPlants(req, res);
  });

plantRouter.get("/id/:id", (req, res) => {
    plantController.getPlantById(req, res);
  });

plantRouter.post("/post", (req, res) => {
    plantController.createPlant(req, res);
  });

plantRouter.delete("/delete/:id", (req, res) => {
    plantController.deletePlant(req, res);
  });

plantRouter.put("/update/:id", (req, res) => {
    plantController.updatePlant(req, res);
  });
  

export default plantRouter;