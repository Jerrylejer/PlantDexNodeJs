import AppDataSource from "../data-source";
import { AppUser } from "../entities/AppUser";


class AppUserService {
    // Je créé mon repository qui va communiquer avec ma BDD via des reqêtes pré-définies en SQL
    private appUserRepository = AppDataSource.getRepository(AppUser);
    
    // Je créé mes appels service qui déclencheront les requêtes CRUD à la BDD
    // Listes de tous les users
    async getAllAppUsers() {
        return await this.appUserRepository.find();
    }
    // Un user
    async getAppUserById(id: number) {
        return await this.appUserRepository.findOneBy({id:id});
    }
    // Ajouter un user 
    async createAppUser(user: AppUser) {
        const newUser = this.appUserRepository.create(user);
        return await this.appUserRepository.save(newUser);
    }
    // Supprimer un user
    async deleteAppUser(id: string) { 
        return await this.appUserRepository.delete(id);
    }
    // Modifier un user
    async updateAppUser(id: number, user: AppUser) {
        return await this.appUserRepository.update(id, user);
    }
}
export default AppUserService;