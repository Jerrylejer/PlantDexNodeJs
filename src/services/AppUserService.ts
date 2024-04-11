import AppDataSource from "../data-source";
import { Appuser } from "../entities/Appuser";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

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

    async signup(email: string, password: string) {
        // Je dois vérifier que mon pwd n'est ni undefined ni null avant l'envoi à bcrypt
        // https://deycode.com/posts/error-data-and-salt-arguments-required/
        if(password != undefined && password != null) {
            console.log("password", password);
            const hashedPassword = await bcrypt.hash(password, 10);
            console.log("password", hashedPassword)
            // Création d'un user
            const newAppUser = this.appuserRepository.create({email: email, pwd: hashedPassword});
            // Create n'enregistre pas, il faut save
            return await this.appuserRepository.save(newAppUser);
        }
    }

    async login(email: string, password: string) {
        const user = await this.appuserRepository.findOneBy({ email: email });
        console.log("user", user);
      
        if (!user) {
          return null;
        }
      
        const isPasswordValid = await bcrypt.compare(password, user.pwd);
      
        if (!isPasswordValid) {
          return null;
        }
      
        const token = jwt.sign(
            { id: user.id, email: user.email },
            // tscpnfig.ts décommenter "strictNullChecks": false ou caster "as string" 
            process.env.JWT_SECRET,
            { expiresIn: "4h" }
        );
      
        return token;
      }
}
export default AppuserService;