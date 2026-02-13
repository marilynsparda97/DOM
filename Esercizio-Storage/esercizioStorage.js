const inputNome = document.querySelector('.firstname');
const spanTitolo = document.querySelector('.title-name');
const bottone = document.querySelector('.btn');

        bottone.addEventListener('click', () => {
            const nomeValore = inputNome.value;

            spanTitolo.textContent = nomeValore;

            sessionStorage.setItem('nomeSessione', nomeValore);
        });

        window.addEventListener('DOMContentLoaded', () => {
            const datoRecuperato = sessionStorage.getItem('nomeSessione');
            
            if (datoRecuperato) {
                spanTitolo.textContent = datoRecuperato;
                inputNome.value = datoRecuperato;
            }
        });
   