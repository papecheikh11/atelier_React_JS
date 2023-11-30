// Capacité d'un object a prendre plusieurs forme
class User {
    constructor(noms){
        this.noms = noms
    }
    login(){
        console.log(`${this.noms} connecté(e) en tant qu'utilisateur `);
    }
}

class Admin extends User {
    login(){
        super.login()
        console.log(`${this.noms} connecté(e) en tant qu'admin `);
    }
}

const user1 = new User('Pape Cheikh');
const admin = new Admin('Pape Diop');
user1.login()
admin.login()