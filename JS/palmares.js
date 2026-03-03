// On charge le fichier JSON qui contient le palmarès
fetch("data/data.json")

  // On transforme la réponse en objet JavaScript
  .then(response => response.json())

  // Quand le JSON est chargé
  .then(data => {
    // Vérification dans la console
    console.log("JSON chargé ✅", data);

    // On récupère la section HTML où afficher le palmarès
    const container = document.querySelector(".palmares");

    // On parcourt chaque élément du palmarès
    data.palmares.forEach(item => {

      // On crée le HTML d’une carte de palmarès
      const html = `
        <section class="palmares-section">
          <span class="badge">${item.badge}</span>
          <img src="${item.image}" alt="${item.title}">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </section>
      `;

      // On ajoute la carte dans la page HTML
      container.insertAdjacentHTML("beforeend", html);
    });
  })

  // En cas d’erreur, on l’affiche dans la console
  .catch(error => {
    console.error("Erreur JSON ", error);
  });