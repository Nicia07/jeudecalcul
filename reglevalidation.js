// LES REGLES DE VALIDATION DE FORMULAIRE

// Vérifier que le champ "Nom" est bien complété

const elementFormulaire = document.querySelector("form");
console.log(elementFormulaire);

// J'ajoute un écouteur d'événement sur le formulaire. Pourquoi? Pour écouter l'événement submit
elementFormulaire.addEventListener("submit", (event) => {
    /* on empêche le comportement par défaut de l'événement submit
        event.preventDefault(); permet d'éviter un rechargement la page
    */
     
    event.preventDefault();

    //Récupère l'élément qui contient le nom
    const elementInputNom = document.querySelector("#nom");
    const valueNom = elementInputNom.value;

    // Vérifier la valeur du champ "nom"
    if(valueNom === "") {
        console.log("le Champ nom est vide.");
    } else {
        console.log("le champ nom est rempli.");
    }

    // Objectif: Vérifier que la valeur du champ "Prenom" n'est pas vide
});