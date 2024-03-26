import { Plant } from "../entities/Plant";
import PlantService from "../services/PlantService";
import { Request, Response } from "express";

class PlantController {
    // Instanciatoin d'un plantService
    private plantService = new PlantService();

    async getAllPlants(req: Request, res: Response) {
        try {
            // Je stocke dans plants ma liste json transmise par le service
          const plants = await this.plantService.getAllPlants();
          res.send({ status: "OK", data: plants });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async getPlantById(req: Request, res: Response) {
        try {
        // Je stocke dans plant l'objet json transmit par le service
          const plant = await this.plantService.getPlantById(Number(req.params.id));
          res.send({ status: "OK", data: plant });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async createPlant(req: Request, res: Response) {
        try {
        // Je stocke dans plant l'objet json transmit par le service
          const newPlant = await this.plantService.createPlant(req.body);
          res.send({ status: "OK", data: newPlant });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }
}
export default PlantController;