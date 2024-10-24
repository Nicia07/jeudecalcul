/*Les evenements */
//Evenement appellé change
//1.Récupère l'évenement que contient <input type="text" id="nom" name="nom">
const elementInputNom = document.querySelector("#nom")



//.Ecouter l'évenement change,puis exécuter le code
elementInputNom.addEventListener("change", ()=>{// => {} équivaut a function (){}
    console.log("--- j'ai entendu chage :-)");
})

const elementInputPrenom = document.querySelector("#prenom");
console.log(elementInputPrenom);

let messageSalutation;
const elementMessageSalutation = document.querySelector("#messageSalutation");
elementInputPrenom.addEventListener("change", (event) =>{
    console.log("Le change est : ", event.target.value);
    messageSalutation = `Bonjour ${event.target.value}`;
    elementMessageSalutation.textContent = messageSalutation;
});


const date = new Date()// elle permet de créé une instance de date issue de l'objet Date()
console.log("Date :", date);

function afficheJournee(heure){
    if(heure < 12 ){
        return "Bonjour";
    }
    return "Bonsoir";// Monsieur tsi bloqué haa tsi sama D'accord Oui yes 
}



console.log("année en cours :", date.getFullYear());//Récuperer l'annee au format YYYY
console.log("Heure :", date.getHours());



console.log("Mois en cours : ", date.getMonth());//récupére le numéro du mois en cours 

console.log("Aujourd'hui :", date.getDay); //récupére le numero du jour dans la semaine

console.log("Jour Numéro :", date.getDate());//récupére le numéro d'aujourd'hui

let element