// Fonction pour gérer le filtrage des pharmacies par ville
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les boutons de filtre de ville
    const cityButtons = document.querySelectorAll('.city-filter-btn');
    
    console.log('Nombre de boutons trouvés:', cityButtons.length);
    
    // Variable pour stocker le bouton actif
    let activeButton = null;

    // Fonction pour filtrer les pharmacies par ville
    const filterPharmaciesByCity = (city) => {
        console.log('Filtrage pour la ville:', city);

        // Récupérer toutes les pharmacies depuis data.js
        if (typeof pharmaciesData === 'undefined') {
            console.error('pharmaciesData n\'est pas défini. Vérifiez que data.js est bien chargé.');
            return;
        }

        const pharmacies = pharmaciesData;
        console.log('Nombre total de pharmacies:', pharmacies.length);
        
        // Filtrer les pharmacies pour la ville sélectionnée
        let filteredPharmacies;
        if (city === 'all') {
            filteredPharmacies = pharmacies;
        } else {
            filteredPharmacies = pharmacies.filter(pharmacy => {
                const matchCity = pharmacy.city.toLowerCase() === city.toLowerCase();
                return matchCity;
            });
        }

        console.log('Pharmacies filtrées:', filteredPharmacies.length);

        // Vérifier si pharmacyApp existe et est correctement initialisé
        if (typeof pharmacyApp === 'undefined') {
            console.error('pharmacyApp n\'est pas défini. Vérifiez que script.js est bien chargé.');
            return;
        }

        if (!pharmacyApp.displayPharmacies) {
            console.error('La fonction displayPharmacies n\'existe pas dans pharmacyApp');
            return;
        }

        // Afficher les résultats
        pharmacyApp.displayPharmacies(filteredPharmacies);
        
        // Mettre à jour le compteur
        updateResultsCount(filteredPharmacies.length);
    };

    // Fonction pour mettre à jour l'apparence des boutons
    const updateButtonStyles = (selectedButton) => {
        // Réinitialiser tous les boutons
        cityButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Mettre en évidence le bouton sélectionné
        if (selectedButton) {
            selectedButton.classList.add('active');
        }
    };

    // Fonction pour mettre à jour le compteur de résultats
    const updateResultsCount = (count) => {
        const counter = document.getElementById('pharmacyCount');
        if (counter) {
            counter.textContent = count;
        }
    };

    // Ajouter les écouteurs d'événements aux boutons
    cityButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            try {
                // Récupérer le nom de la ville depuis l'attribut data-city
                const city = button.getAttribute('data-city');
                console.log('Ville sélectionnée:', city);
                
                // Si on clique sur le même bouton, réinitialiser le filtre
                if (activeButton === button) {
                    console.log('Réinitialisation du filtre');
                    filterPharmaciesByCity('all');
                    updateButtonStyles(null);
                    activeButton = null;
                    return;
                }

                // Mettre à jour le bouton actif
                activeButton = button;
                
                // Appliquer le filtre
                filterPharmaciesByCity(city);
                
                // Mettre à jour les styles des boutons
                updateButtonStyles(button);

            } catch (error) {
                console.error('Erreur lors du filtrage:', error);
            }
        });
    });

    // Fonction pour réinitialiser les filtres
    window.resetCityFilters = () => {
        filterPharmaciesByCity('all');
        updateButtonStyles(null);
        activeButton = null;
    };
});