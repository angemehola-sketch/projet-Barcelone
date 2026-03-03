// Vérifie que le fichier JavaScript est bien connecté
console.log("JS CONNECTÉ");

// Sélection du conteneur qui va recevoir les cartes joueurs
const playersContainer = document.querySelector(".players-cards");

// Sélection du conteneur qui va recevoir les cartes moments
const momentsContainer = document.querySelector(".moments-cards");

// Chargement du fichier JSON
fetch("data/data.json")
  .then(response => response.json()) // Transformation en objet JavaScript
  .then(data => {
    console.log("JSON chargé", data);

    // ===============================
    // CRÉATION DES CARTES JOUEURS
    // ===============================
    data.players.forEach(player => {
      playersContainer.insertAdjacentHTML(
        "beforeend",
        `
        <article class="card">
          <!-- image normale + image hover -->
          <img 
            src="${player.image}" 
            data-hover="${player.hoverImage}" 
            alt="${player.name}"
          >
          <h3>${player.name}</h3>
          <p>${player.description}</p>
        </article>
        `
      );
    });

    // ===============================
    // CRÉATION DES CARTES MOMENTS
    // ===============================
    data.moments.forEach(moment => {
      momentsContainer.insertAdjacentHTML(
        "beforeend",
        `
        <article class="card">
          <!-- image normale + image hover -->
          <img 
            src="${moment.image}" 
            data-hover="${moment.hoverImage}" 
            alt="${moment.title}"
          >
          <h3>${moment.title}</h3>
          <a href="${moment.link}">
            <button>${moment.button}</button>
          </a>
        </article>
        `
      );
    });
  });

// ===============================
// CHANGEMENT D’IMAGE AU SURVOL
// ===============================

// Quand la souris ENTRE sur une carte
document.addEventListener("mouseover", event => {
  const card = event.target.closest(".card");
  if (!card) return;

  const img = card.querySelector("img");

  // On sauvegarde l'image originale
  img.dataset.original = img.src;

  // On remplace par l'image hover
  if (img.dataset.hover) {
    img.src = img.dataset.hover;
  }
});

// Quand la souris SORT de la carte
document.addEventListener("mouseout", event => {
  const card = event.target.closest(".card");
  if (!card) return;

  const img = card.querySelector("img");

  // On remet l'image d'origine
  if (img.dataset.original) {
    img.src = img.dataset.original;
  }
});