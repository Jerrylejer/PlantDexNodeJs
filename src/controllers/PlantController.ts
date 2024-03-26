import PlantService from "../services/PlantService";
import { Request, Response } from "express";

class PlantController {
    // Instanciatoin d'un plantService
    private plantService = new PlantService();

    async getAllPlants(req: Request, res: Response) {
        try {
          const plants = await this.plantService.getAllPlants();
          res.send({ status: "OK", data: plants });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }
}
export default PlantController;