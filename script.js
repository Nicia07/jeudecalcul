
document.querySelector('#buttonValider').addEventListener('click', function() {
    const anneeNaissance = document.querySelector('#anneenaissance').value;
    const anneeActuelle = new Date().getFullYear();
    const messageAffiche = document.querySelector('#affichageAge');
    
    if (anneeNaissance) {
        const age = anneeActuelle - anneeNaissance;
        messageAffiche.textContent = "Votre âge est : " + age + " ans.";
    } else {
        messageAffiche.textContent = "Veuillez saisir une année de naissance valide.";
    }
});

const elementSituation = document.querySelector(`input[name="situation"]`);
console.log(elementSituation);

let situationCochee;
for(let i = 0; i < elementSituation.lenght; i++){
    if(elementSituation[i].checked){
        console.log(elementSituation[i].value);
        situationCochee = elementSituation[i].value;
        break
    }
}
