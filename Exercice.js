/* */
let nom = "HMD";
let prenom = "Nicia";
let edate = "16/10/2006";

console.log("type de nom", typeof nom);//typeof permet de savoir le type de variable
console.log("type de prenom",typeof prenom);
console.log("type de date",typeof edate);

let age = prompt('Quel âge avez-vous ?');//  à saisir du texte
alert(`vous avez ${age} ans!`);

let isCodeur = confirm("Etes-vous codeur ?");// confirme() retourne d'une valeur booléen
alert( isCodeur );

let Nom = prompt("quel est votre Nom");
alert(`Vous vous appeler:  ${Nom}` );

let hisabu = 2;
hisabu ++;
alert( hisabu);
// les deux variable hisabu et hisabue renvoi la meme chose sur le navigateur le chiffre 3
let hisabue = 2;  
let shikoa = ++hisabue;
alert( shikoa);

let annee = prompt('Dans quelle année sommes-nous ?');//if(){} else {}signifie exécute une instruction si une condition donnée est équivalente à vrai
if (annee == 2015) {
alert( 'Vous avez juste!' );
} else {
alert( 'Vous vous trompez?' );
}

let utilisateur = new Object();
console.log(typeof utilisateur)//Affiche objet 

let monTableauVille = ["Paris","Toulouse","Marseille",
"Mamoudzou","Dzaoudzi","Acoua","Chirongui"];

console.log("monTableauVille", typeof monTableauVille)
for(let i = 0; i < monTableauVille.length; i++ ){ 
    console.log(monTableauVille[i])
    }
     
let eleve = {
    nom : "Said",
    age : 25,
    notes : [10, 18, 15]
};
 
console.log(eleve.nom);
let ageEleve = eleve.age;//Récupere l'age grace à la clé age
console.log(eleve.notes[0]);
let notesEleve = eleve[`notes`];

for(let i = 0; i < notesEleve.length; i++){
    console.log(notesEleve[i]);
}