function plusGrandElement(tableau) {
    if (tableau.length === 0) {
        // Gérer le cas où le tableau est vide
        return undefined; // on peux choisir de renvoyer une autre valeur si nécessaire
    }

    let plusGrand = tableau[0]; // On suppose que le premier élément est le plus grand

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > plusGrand) {
            plusGrand = tableau[i]; // Mettre à jour si un élément plus grand est trouvé
        }
    }

    return plusGrand;
}
let monTableau = [12, 5, 8, 20, 3];
let plusGrand = plusGrandElement(monTableau);
console.log(plusGrand);  // Cela affichera 20, car c'est le plus grand élément du tableau
