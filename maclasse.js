// La notion de classe en Javascript

// La synthaxe de classe 
//On veut vor de quoi est composée une classe.

class MyClass{
    //Les methodes de ma classe MyClasse
    constructor( ){}//construecteur de ma classe
    methode1(){}//Premiére methode de ma classe 
    methode2(){}//Deuxiéme methode de ma classe
    methode3(){}//troisiéme methode de ma classe
}

    class Utilisateur { 
        constructor(nomUtilisateur){// mon contructeur
            this.nom = nomUtilisateur;
        }
        welcom(){// Méthode
            alert("welcom" + this.nom);
        }

        getheure(){
            const date = new Date()
            //récupére l'heure et la stoke dans la variable heure
            const heure = date.getHours();
            const minutes = date.getMinutes();
            const seconde = date.getSeconds();
            // récupere les minutes et les stocke dans la variable minute
            console.log(heure + ":"+minutes + ":"+seconde);
            
        }
        }

    //Implémenter ma classe utilisateur en créeant on Objet appartenant à la classe utilisateur 
    let utilisateur = new Utilisateur("Dominique");

/*
lorsque new Utilisateur("Dominique")est appelé :
1. un nouvel objet crée, l'objet crée esst utilisateur,
2. le constructor s'execute avec l'argument "Dominique"qui est passé 
et assigne thin.nom à l'objet.
3.nous pouvouns maintenant appeler de l'objet crée. par exemple utilisateur.welcom
 */

let utilisatrice = new Utilisateur("Sarah");
    utilisatrice.welcom();
    utilisateur.getheure();
