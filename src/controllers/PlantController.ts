import PlantService from "../services/PlantService";
import { Request, Response } from "express";

class PlantController {
    // Instanciatoin d'un plantService
    private plantService = new PlantService();

    async getAllPlants(req: Request, res: Response) {
        try {
            // Je stocke dans plants ma liste json transmise par le service
          const plants = await this.plantService.getAllPlants();
          // Voir avec Louis car si je send => res.send({ status: "OK", data: plant });
          // J'ai des diffiultés pour m'affranchir du type objet et accéder au data:[]
          res.send(plants);
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async getPlantById(req: Request, res: Response) {
        try {
        // Je stocke dans plant l'objet json transmit au service
          const plant = await this.plantService.getPlantById(Number(req.params.id));
          res.send({ status: "OK", data: plant });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async createPlant(req: Request, res: Response) {
        try {
        // Je stocke dans newPlant l'objet json transmit au service
          const newPlant = await this.plantService.createPlant(req.body);
          res.send({ status: "CREATED", data: newPlant });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async deletePlant(req: Request, res: Response) {
        try {
        // Je n'ai rien à stocker, je ne renvoie que le status "DELETED"
          await this.plantService.deletePlant(req.params.id);
          res.send({ status: "DELETED" });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async updatePlant(req: Request, res: Response) {
        try {
        // Je stocke dans updatedPlant l'objet json transmit au service
          const updatedPlant = await this.plantService.updatePlant(req.params.id, req.body);
          console.log("données transmises ", updatedPlant);
          res.send({ status: "UPDATED", data: updatedPlant });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }
}
export default PlantController;