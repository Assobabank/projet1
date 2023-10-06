function compteVoyelles(mot) {
    // Convertir le mot en minuscules pour simplifier la comparaison
    mot = mot.toLowerCase();
    
    // Définir la liste des voyelles
    var voyelles = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialiser un compteur pour les voyelles
    var compteurVoyelles = 0;
    
    // Parcourir chaque caractère du mot
    for (var i = 0; i < mot.length; i++) {
      // Vérifier si le caractère est une voyelle
      if (voyelles.indexOf(mot[i]) !== -1) {
        compteurVoyelles++;
      }
    }
    
    // Retourner le nombre de voyelles trouvé
    return compteurVoyelles;
  }
  
  // Exemple d'utilisation :
  var mot = "bonjour";
  var nombreDeVoyelles = compteVoyelles(mot);
  console.log("Le mot '" + mot + "' contient " + nombreDeVoyelles + " voyelles.");
  