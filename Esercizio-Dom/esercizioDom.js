const ul = document.querySelector('ul');
        const secondoLi = ul.children[1];

        console.log("RISULTATI ESERCIZIO");

        console.log("1. Padre di ul:", ul.parentElement);

        console.log("2. Secondo figlio di ul:", ul.children[1]);

        console.log("3. Fratello successivo del secondo li:", secondoLi.nextElementSibling);

        console.log("4. Fratello precedente del secondo li:", secondoLi.previousElementSibling);