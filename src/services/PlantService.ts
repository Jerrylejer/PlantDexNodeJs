import AppDataSource from "../data-source";
import { Plant } from "../entities/Plant";


class PlantService {
    // Je créé mon repository qui va communiquer avec ma BDD via des reqêtes pré-définies en SQL
    private plantRepository = AppDataSource.getRepository(Plant);
    // Je créé mes appels service qui déclencheront les requêtes CRUD à la BDD
    // Listes de toutes les plantes
    async getAllPlants() {
        return this.plantRepository.find();
    }
    // Une plante
    async getPlantById(id: number) {
        return await this.plantRepository.findOneBy({id:id});
    }
    // Ajouter une plante 
    async createPlant(plant: Plant) {
        const newPlant = this.plantRepository.create(plant);
        return await this.plantRepository.save(newPlant);
    }
    // Supprimer une plante
    async deletePlant(id: string) { 
        return await this.plantRepository.delete(id);
    }
    // Modifier une plante
    async updatePlant(id: string, plant: Plant) {
        return await this.plantRepository.update(id, plant);
    }
}
export default PlantService;