
        const cardCode = '01001'; 
        const apiUrl = `https://ringsdb.com/api/public/card/${cardCode}.json`;

        async function fetchLotrCard() {
            try {
                const response = await fetch(apiUrl);
                const cardData = await response.json();

                const nameElement = document.getElementById('char-name');
                const imageWrapper = document.getElementById('image-wrapper');

                nameElement.textContent = cardData.name;

                if (cardData.imagesrc) {
                    const fullImageUrl = `https://ringsdb.com${cardData.imagesrc}`;
                    imageWrapper.innerHTML = `<img src="${fullImageUrl}" id="char-image" alt="${cardData.name}">`;
                } else {
                    imageWrapper.innerHTML = `<p>Immagine non disponibile</p>`;
                }

            } catch (error) {
                console.error("Errore nel recupero dati:", error);
                document.getElementById('char-name').textContent = "Errore nel caricamento";
            }
        }

        
        fetchLotrCard();