import { Router} from "express";
import AppuserController from "../controllers/AppUserController";

const appuserRouter = Router();
// Instanciation d'un appUserController
const appuserController = new AppuserController();

appuserRouter.get("/appuser", (req, res) => {
    appuserController.getAllAppusers(req, res);
  });

  appuserRouter.get("/appuser/id/:id", (req, res) => {
    appuserController.getAppUserById(req, res);
  });

  appuserRouter.post("/appuser/post", (req, res) => {
    appuserController.createAppUser(req, res);
  });

  appuserRouter.delete("/appuser/delete/:id", (req, res) => {
    appuserController.deleteAppUser(req, res);
  });

  appuserRouter.put("/appuser/update/:id", (req, res) => {
    appuserController.updateAppUser(req, res);
  });
  

export default appuserRouter;