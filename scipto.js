function estimer() {
  const input = document.getElementById("expression").value;
  const resultatDiv = document.getElementById("resultat");

  let valeur;

  try {
    valeur = eval(input);
  } catch (e) {
    resultatDiv.innerHTML = "Je ne comprends pas votre expression...";
    return;
  }

  if (typeof valeur !== "number" || isNaN(valeur)) {
    resultatDiv.innerHTML = "Je ne comprends pas le résultat...";
    return;
  }
  const intervalle = intervalleEstimation(valeur);
  const qualite = interpretation(valeur);

  resultatDiv.innerHTML = `
   Interprétation : ${qualite}<br>
    Intervalle estimé : ${intervalle}
  `;
}

function intervalleEstimation(x) {
  const marge = Math.abs(x) * 0.1;
  const min = (x - marge).toFixed(2);
  const max = (x + marge).toFixed(2);
  return `entre ${min} et ${max}`;
}

function interpretation(x) {
  if (Math.abs(x) < 0.5) return "plus proche de 0 que de 1";
  if (Math.abs(x) < 1) return "plus proche de 1 que de 0";
  if (Math.abs(x) < 10) return "nombre petit";
  if (Math.abs(x) < 100) return "nombre moyen";
  if (Math.abs(x) < 1000) return "nombre grand";
  return "nombre très grand";
    }
