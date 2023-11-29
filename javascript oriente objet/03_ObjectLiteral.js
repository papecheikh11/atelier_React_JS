//object Literal
const utilisateur = {
    noms: "Pape Cheikh",
    email: "cheikh@gmail.com",
    amis: ['Ousmane', 'Thierno'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

console.log(utilisateur);

//Accés aux propriétés d'un object

console.log(utilisateur.noms);
console.log(utilisateur.email);

console.log(utilisateur['noms']);
console.log(utilisateur['email']);

utilisateur.noms = 'Blais King'
utilisateur['email']= 'blaise@gmail.com'
console.log(utilisateur);