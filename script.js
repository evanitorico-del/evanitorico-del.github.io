(function () {
  // Pas d'effet si la personne a désactivé les animations
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var lueur = document.createElement("div");
  lueur.className = "curseur-glow";
  document.body.appendChild(lueur);

  var cibleX = window.innerWidth / 2;
  var cibleY = window.innerHeight / 2;
  var x = cibleX;
  var y = cibleY;

  window.addEventListener("mousemove", function (e) {
    cibleX = e.clientX;
    cibleY = e.clientY;
  });

  function suivre() {
    // Le 0.12 donne un léger effet de retard très fluide
    x += (cibleX - x) * 0.12;
    y += (cibleY - y) * 0.12;
    lueur.style.transform = "translate(" + (x - 200) + "px, " + (y - 200) + "px)";
    requestAnimationFrame(suivre);
  }
  suivre();
})();
