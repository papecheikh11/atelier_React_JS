// Abstraction: se baser sur l'essentiel et non les details
function Employe (noms, age, sexe, salaire) {
    this.noms = noms
    this.age = age
    this.sexe = sexe
    this.salaire = salaire
    const allocation = 7000
    const primeDeRisque = 6000
    const calculSalaire = function(){
        console.log(`Le salaire final: ${salaire + allocation + primeDeRisque}`);
    }
    this.infoEmploye = function(){
        console.log(`Noms : ${this.noms}`);
        console.log(`Age : ${this.age}`);
        console.log(`Sexe : ${this.sexe}`);
        console.log(`Salaire : ${this.salaire}`);
        calculSalaire()
    }
}

//instance
const emp1 = new Employe('Pape Mame', 30 ,'M', 50000)
const emp2 = new Employe('Fatima Sow', 45 ,'F', 45000)
emp1.infoEmploye()
emp2.infoEmploye()