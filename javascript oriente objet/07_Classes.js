//Classes: c'est une maquette (modele) pour creer des objects
class Utilisateur {
    //constructor : c'est une fonction qui implemente les proprietés d'un object
    constructor(noms, email, ...amis){
        this.noms = noms
        this.email = email
        this.amis = amis
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }

    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

const utili1 = new Utilisateur('Pape Cheikh', 'cheikh@gmail.com', 'Alice', 'Grace')
const utili2 = new Utilisateur('Modou Diop', 'modou@gmail.com', 'Jonathan')
console.log(utili1);
console.log(utili2);

utili1.login()
utili1.logout()