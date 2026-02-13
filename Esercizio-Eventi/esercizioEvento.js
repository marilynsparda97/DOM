const button = document.querySelector('.btn');

button.addEventListener('click', () => {
        
        document.body.classList.toggle('theme');

        if (document.body.classList.contains('theme')) {
          button.innerText = "Disattiva Dark Mode";
        } else {
          button.innerText = "Attiva Dark Mode";
        }
      });
    