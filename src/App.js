import React from 'react';

function App() {
  // Fonction pour gérer la réservation
  const handleReservation = () => {
    // Vous pouvez ajouter ici la logique pour gérer la réservation,
    // par exemple, afficher un formulaire de réservation.
    alert("Fonction de réservation à implémenter !");
  };

  return (
    <div className="App">
      <header>
        <h1>Ma Application de Réservation de Taxi</h1>
      </header>
      <main>
        <p>Bienvenue sur notre plateforme de réservation de taxi.</p>
        <img src="/chemin-vers-votre-image.jpg" alt="Image d'accueil" />
        {/* Bouton de réservation */}
        <button onClick={handleReservation}>Réserver un taxi</button>
      </main>
    </div>
  );
}

export default App;
