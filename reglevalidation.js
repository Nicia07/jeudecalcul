// LES REGLES DE VALIDATION DE FORMULAIRE

// Vérifier que le champ "Nom" est bien complété


const elementFormulair = document.querySelector("form");
console.log(elementFormulair);
// ajoute un écouteur d'événement sur le formulaire. pourquoi? pour écouter l'événement submit
elementFormulair.addEventListener("submit", (event) => {
    /* On empêche le comportement par défaut de l'événement submit
       event.preventDefault(); permet d'éviter un rechargement la page
    */
    event.preventDefault();

   // Récupère l'élement qui contient le nom
   const elementInputNom = document.querySelector("#nom");
   const valueNom = elementInputNom.value;

    // Vérifier la valeur du champ "nom"
    if (valueNom === "") {
        console.log("le Champ nom est vide.");
    } else {
    console.log(" Nom est rempli.");
    }
 
    
    const elementInputPrenom = document.querySelector("#prenom");
    const valuePrenom = elementInputPrenom.value;
    
 
    if(valuePrenom === "") {
       console.log("le Champ prenom est vide.");
    } else {
     console.log(" Prenom est rempli.");
    }
 
 });