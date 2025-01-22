document.querySelector('#buttonValider').addEventListener('click', function() {
    // Récupérer les valeurs des champs du formulaire
    const anneeNaissance = document.querySelector('#anneenaissance').value;
    const nom = document.querySelector('#nom').value;
    const prenom = document.querySelector('#prenom').value;
    const situationElements = document.querySelectorAll('input[name="situation"]');
    const messageAffiche = document.querySelector('#affichageAge');
    const messageSalutation = document.querySelector('#messageSalutation');

    const anneeActuelle = new Date().getFullYear();

    // Vérifier si l'année de naissance est saisie
    if (anneeNaissance && nom && prenom) {
        // Calcul de l'âge
        const age = anneeActuelle - anneeNaissance;

        // Afficher le nom et prénom
        messageSalutation.textContent = `Bonjour ${prenom} ${nom}!`;

        // Afficher l'âge
        messageAffiche.textContent = "Votre âge est : " + age + " ans.";

        // Vérifier la situation (étudiant ou salarié)
        let situationCochee = '';
        situationElements.forEach(element => {
            if (element.checked) {
                situationCochee = element.value;
            }
        });

        // Afficher la situation
        if (situationCochee) {
            messageSalutation.textContent += ` Vous êtes ${situationCochee}.`;
        } else {
            messageSalutation.textContent += ' Vous n\'avez pas sélectionné de situation.';
        }
    } else {
        // Afficher un message d'erreur si une information manque
        messageAffiche.textContent = "Veuillez remplir tous les champs correctement.";
        messageSalutation.textContent = '';
    }
});


