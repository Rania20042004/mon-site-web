document.getElementById('myForm').addEventListener('submit', function(event) {
    // Empêche l'envoi du formulaire pour validation
    event.preventDefault();
    
    // Récupération des champs de saisie
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');

    // Expression régulière pour valider le format de l'email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Réinitialiser le message d'erreur
    errorMessage.textContent = "";

    // Vérification du champ "Nom"
    if (name.trim() === "") {
        errorMessage.textContent = "Le nom ne peut pas être vide.";
        alert("Erreur : Le champ Nom est requis.");
        return;
    }

    // Vérification du champ "Email"
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "L'email n'est pas valide.";
        alert("Erreur : Format d'adresse email invalide.");
        return;
    }

    // Si les validations passent, afficher un message de succès et soumettre le formulaire
    alert("Formulaire soumis avec succès !");
    this.submit();  // Envoie du formulaire après validation
});
