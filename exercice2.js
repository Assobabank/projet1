function premierElement(tableau) {
    if (tableau.length > 0) {
        return tableau[0];
    } else {
        // Gérer le cas où le tableau est vide
        return undefined; // on peux choisir de renvoyer une autre valeur si nécessaire
    }
}
let monTableau = [1, 2, 3, 4, 5];
let premier = premierElement(monTableau);
console.log(premier);  // Cela affichera 1, car 1 est le premier élément du tableau
