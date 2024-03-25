import express from "express";
import cors from "cors";
import AppDataSource from "./data-source";
import plantRouter from "./routes/PlantRoutes";

AppDataSource.initialize()
.then(() => {
    const app = express();

    app.use(express.json()); 
    // Je paramètre les restrictions d'accès à l'api via les cors
    app.use(
      cors({
        // J'accepte toutes les connections vers l'api
        origin: "*", 
        // J'autorise toutes les requêtes (PATCH ?)
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    ); 

    // Je définie un chemin par défaut avant mes routes
    app.use("/api/plants", plantRouter);

    app.listen(process.env.PORT, () => {
      console.log(
        `L'api est en route sur l'adresse localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(`Une erreur s'est produite :`, err);
  });