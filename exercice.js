function compterOccurrences(tableau, element) {
    var compteur = 0;
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] === element) {
            compteur++;
        }
    }
    return compteur;
}

var tableau = ["a", "b", "c","a" ];
var occurrencesA = compterOccurrences(tableau, "a");
var occurrencesB = compterOccurrences(tableau, "b");
var occurrencesC = compterOccurrences(tableau, "c");

console.log("Occurrences de 'a': " + occurrencesA);
console.log("Occurrences de 'b': " + occurrencesB);
console.log("Occurrences de 'c': " + occurrencesC);
