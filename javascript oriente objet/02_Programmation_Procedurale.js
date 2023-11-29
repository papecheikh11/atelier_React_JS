//Creation utilisateur 1
const nomsUtili = 'Pape Cheikh'
const emailUtili = 'cheikh@gmail.com'
const amisUtili = ['Pape', 'Ousmane']
console.log(`Nom : ${nomsUtili}`);
console.log(`Email : ${emailUtili}`);
console.log(`Amis : ${amisUtili}`);
console.log("");

//Creation utilisateur 2
const nomsUtili2 = 'Ami Sene'
const emailUtili2 = 'ami@gmail.com'
const amisUtili2 = ['Omar', 'Modou']
console.log(`Nom : ${nomsUtili2}`);
console.log(`Email : ${emailUtili2}`);
console.log(`Amis : ${amisUtili2}`);
console.log("");

//Creation utilisateur 2
const nomsUtili3 = 'Mari Diop'
const emailUtili3 = 'mari@gmail.com'
const amisUtili3 = ['Seydou', 'Ousseynou']
console.log(`Nom : ${nomsUtili3}`);
console.log(`Email : ${emailUtili3}`);
console.log(`Amis : ${amisUtili3}`);
console.log("");

//fonctions
function login(email) {
    console.log(`${email} est connecté`);
}

function logout(email) {
    console.log(`${email} est déconnecté`);
}

login(emailUtili)
logout(emailUtili)
login(emailUtili2)
logout(emailUtili2)