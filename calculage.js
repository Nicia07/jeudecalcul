function calculAge(anneenaissance, anneeEncours) {
    let age = anneeEncours - anneenaissance;
    console.log("calculerAge :", age + "ans");
    return age;
}

let elementNom = document.querySelector("#nom");
let elementPrenom = document.querySelector("#prenom");
let elementsalarie = document.querySelector("#salarie");
let elementetudiant = document.querySelector("#etudiant");
let elementanneenaissance = document.querySelector("#anneenaissance");
let elementbutton = document.querySelector("#buttonVoirMonAge");
let elementSpan = document.querySelector("#messageAge");

// Ajouter un écouteur d'événement
elementbutton.addEventListener("click", (event) => {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let nom = elementNom.value.trim();//trim Élimine les espaces superflus autour des noms.
    let prenom = elementPrenom.value.trim();
    let anneeSaisie = parseInt(elementanneenaissance.value);

    // Vérification que le nom et le prénom sont fournis
    if (!nom || !prenom) {
        alert("Veuillez entrer un nom et un prénom.");
        return;
    }

    console.log("Nom :", nom);
    console.log("Prénom :", prenom);

    let age = calculAge(anneeSaisie, 2024);
    console.log("Vous avez :", age + " ans");

    // Vérification de l'âge pour afficher le message approprié
    if (age < 18) {
        elementSpan.innerHTML = `Vous êtes mineur.`;
    } else {
        elementSpan.innerHTML = `Vous êtes majeur.`;
    }

    // Récupérer le statut social entre salarié et étudiant
    const elementSituation = document.querySelectorAll(`input[name="situation"]`);
    let situationCochee = '';
    for (let i = 0; i < elementSituation.length; i++) {
        if (elementSituation[i].checked) {
            situationCochee = elementSituation[i].value;
            break;
        }
    }

    if (situationCochee) {
        elementSpan.innerHTML += `<br>Vous êtes ${situationCochee}.`;
    } else {
        elementSpan.innerHTML += `<br>Votre situation n'est pas spécifiée.`;
    }
});

 






