//Factory Functio : c'est une maquette ou modél pour creer des objects en js
const utilisateur = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login(){
            console.log(`${email} est connecté(e)`);
        },
        logout(){
            console.log(`${email} est déconnecté(e)`);
        }
    }
}

const utili = utilisateur('Pape Cheikh', 'cheikh@gmail.com', 'Ousmane', 'Alou', 'Maguette')
const utili2 = utilisateur('Blaise Diagne', 'blais@gmail.com', 'Yvette')
const utili3 = utilisateur('Mari Dia', 'mari@gmail.com', 'Sanga', 'Thierno', 'Modou')

console.log(utili);
console.log(utili2);
console.log(utili3);

utili.login()
utili.logout()

utili2.login()
utili2.logout()