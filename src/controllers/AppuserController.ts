import AppuserService from "../services/AppUserService";
import { Request, Response } from "express";

class AppuserController {
    // Instanciatoin d'un AppuserService
    private appuserService = new AppuserService();

    async getAllAppusers(req: Request, res: Response) {
        try {
            // Je stocke dans plants ma liste json transmise par le service
          const users = await this.appuserService.getAllAppusers();
          // Voir avec Louis car si je send => res.send({ status: "OK", data: plant });
          // J'ai des diffiultés pour m'affranchir du type objet et accéder au data:[]
          res.send(users);
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async getAppUserById(req: Request, res: Response) {
        try {
        // Je stocke dans plant l'objet json transmit au service
          const user = await this.appuserService.getAppuserById(Number(req.params.id));
          res.send(user);
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async createAppUser(req: Request, res: Response) {
        try {
        // Je stocke dans newPlant l'objet json transmit au service
          const newAppUser = await this.appuserService.createAppuser(req.body);
          // res.send({ status: "CREATED", data: newPlant });
          res.send(newAppUser);
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async deleteAppUser(req: Request, res: Response) {
        try {
        // Je n'ai rien à stocker, je ne renvoie que le status "DELETED"
          await this.appuserService.deleteAppuser(req.params.id);
          res.send({ status: "DELETED" });
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }

      async updateAppUser(req: Request, res: Response) {
        try {
        // Je stocke dans updatedPlant l'objet json transmit au service
          const updatedAppUser = await this.appuserService.updateAppuser(req.params.id, req.body);
          console.log("données transmises ", updatedAppUser);
          // res.send({ status: "UPDATED", data: updatedPlant });
          res.send(updatedAppUser);
        } catch (error) {
          res.status(500).send({ status: "Failed", message: error });
        }
      }
}
export default AppuserController;