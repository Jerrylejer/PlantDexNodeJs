import AppDataSource from "../data-source";
import { Appuser } from "../entities/AppUser";

class AppuserService {
    // Je créé mon repository qui va communiquer avec ma BDD via des requêtes pré-définies en SQL
    private appuserRepository = AppDataSource.getRepository(Appuser);
    
    // Je créé mes appels service qui déclencheront les requêtes CRUD à la BDD
    // Listes de tous les users
    async getAllAppusers() {
        return await this.appuserRepository.find();
    }
    // Un user
    async getAppuserById(id: number) {
        return await this.appuserRepository.findOneBy({id:id});
    }
    // Ajouter un user 
    async createAppuser(user: Appuser) {
        const newAppuser = this.appuserRepository.create(user);
        return await this.appuserRepository.save(newAppuser);
    }
    // Supprimer un user
    async deleteAppuser(id: string) { 
        return await this.appuserRepository.delete(id);
    }
    // Modifier un user
    async updateAppuser(id: string, user: Appuser) {
        return await this.appuserRepository.update(id, user);
    }
}
export default AppuserService;