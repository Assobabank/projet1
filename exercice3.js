function dernierElement(tableau) {
    if (tableau.length > 0) {
        return tableau[tableau.length - 1];
    } else {
        // Gérer le cas où le tableau est vide
        return undefined; // on peux choisir de renvoyer une autre valeur si nécessaire
    }
}
let monTableau = [1, 2, 3, 4, 5];
let dernier = dernierElement(monTableau);
console.log(dernier);  // Cela affichera 5, car 5 est le dernier élément du tableau
