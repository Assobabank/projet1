<!DOCTYPE html>
<html>
<head>
  <title>classList.toggle Example</title>
</head>
<body>
  <div id="myElement" class="myClass">Cliquez pour basculer la classe</div>
  <script>
    // Sélectionnez l'élément par son ID
    const myElement = document.getElementById("myElement");

    // Écoutez un événement, par exemple un clic, pour basculer la classe
    myElement.addEventListener("click", function() {
      myElement.classList.toggle("myClass");
    });
  </script>
</body>
</html>

