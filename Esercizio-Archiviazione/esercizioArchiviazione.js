const inputNome = document.querySelector('.firstname');
const spanTitolo = document.querySelector('.title-name');
const bottoneSalva = document.querySelector('.btn');

        const caricaDatiSalvati = () => {
            const nomeSalvato = localStorage.getItem('nomeUtente');
            if (nomeSalvato) {
                spanTitolo.textContent = nomeSalvato;
                inputNome.value = nomeSalvato; // Mantiene il nome nell'input
            }
        };

        const salvaDati = () => {
            const valoreInput = inputNome.value;

            spanTitolo.textContent = valoreInput;

            localStorage.setItem('nomeUtente', valoreInput);
            
            alert('Dati salvati con successo!');
        };

        window.onload = caricaDatiSalvati;

        bottoneSalva.addEventListener('click', salvaDati);
    