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


//Heritage des propriétés et des fonctions
class Admin extends Utilisateur{
    //methode uniquement accessible a l'utilisateur
    supprimerUttilisateurs(util){
        utilisateurs = utilisateurs.filter(utilisateur => {
            return utilisateur.email != util.email
        })
    }
}

const utili1 = new Utilisateur('Pape Cheikh', 'cheikh@gmail.com', 'Alice', 'Grace')
const utili2 = new Utilisateur('Modou Diop', 'modou@gmail.com', 'Jonathan')
const admin = new Admin('Chance Key', 'chance@gmail.com', 'Mbaye', 'Moussa')

let utilisateurs = [utili1, utili2, admin]
console.log(utilisateurs);

admin.supprimerUttilisateurs(utili1)
console.log(utilisateurs);