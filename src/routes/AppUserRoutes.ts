import { Router} from "express";
import AppuserController from "../controllers/AppuserController";

const appuserRouter = Router();
// Instanciation d'un appUserController
const appuserController = new AppuserController();

appuserRouter.get("", (req, res) => {
    appuserController.getAllAppusers(req, res);
  });

  appuserRouter.get("/id/:id", (req, res) => {
    appuserController.getAppUserById(req, res);
  });

  appuserRouter.post("/post", (req, res) => {
    appuserController.createAppUser(req, res);
  });

  appuserRouter.delete("/delete/:id", (req, res) => {
    appuserController.deleteAppUser(req, res);
  });

  appuserRouter.put("/update/:id", (req, res) => {
    appuserController.updateAppUser(req, res);
  });

  appuserRouter.post("/signup", (req, res) => {
    appuserController.signup(req, res);
  })

  appuserRouter.post("/login", (req, res) => {
    appuserController.login(req, res);
  })
  

export default appuserRouter;