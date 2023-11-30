function Utilisateur (noms, email, ...amis) {
    this.noms = noms
    this.email = email
    this.amis = amis
}

function Admin (...parms) {
    Utilisateur.apply(this, parms)
}

//Liaison d'une methode au prototype
Utilisateur.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
}

//heritage des prototypes (methodes)
Admin.prototype = Object.create(Utilisateur.prototype)

//fonction seulement accessible par l'admin
Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs = utilisateurs.filter(utilisateur => {
        return utilisateur.email != util.email
    });
}

const utili1 = new Utilisateur('Pape Cheikh', 'cheikh@gmail.com', 'Alice', 'Grace')
const utili2 = new Utilisateur('Modou Diop', 'modou@gmail.com', 'Jonathan')
const utili3 = new Utilisateur('Modou Diop', 'modou@gmail.com', 'Jonathan')
const admin = new Admin('Chance Key', 'chance@gmail.com', 'Mbaye', 'Moussa')

let utilisateurs = [utili1, utili2, utili3, admin]

console.log(utilisateurs);

admin.supprimerUtilisateur(utili1)

console.log(utilisateurs);