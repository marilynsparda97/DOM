function addProduct() {
        const input = document.getElementById('taskInput');
        const ul = document.getElementById('taskList');
        
        const testoTask = input.value;

        if (testoTask === "") {
          alert("Scrivi qualcosa!");
          return;
        }
        const li = document.createElement('li');

        li.innerHTML = '<input type="checkbox"> ' + testoTask;

        ul.appendChild(li);

        input.value = "";
      }