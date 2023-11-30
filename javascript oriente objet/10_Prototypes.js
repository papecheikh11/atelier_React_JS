function Utilisateur (noms, email, ...amis) {
    this.noms = noms
    this.email = email
    this.amis = amis
}

//Liaison d'une methode au prototype
Utilisateur.prototype.login = function(){
    console.log(`${email} est connecté(e)`);
}

Utilisateur.prototype.logout = function(){
    console.log(`${email} est déconnecté(e)`);
}

 const utili1 = new Utilisateur('Pape Cheikh', 'cheikh@gmail.com', 'Dody', 'Mira');
 console.log(utili1);