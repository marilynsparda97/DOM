
      const firstNameValue = document.getElementById('firstName').value;
      const lastNameValue = document.getElementById('lastName').value;
      const ageValue = document.getElementById('age').value;

      const person = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        age: ageValue
      };

      const form = document.querySelector('form');


      const personJson = JSON.stringify(person);

      
      form.setAttribute('data-person', personJson);

      
      console.log("Oggetto creato:", person);
      console.log("Attributo data-person aggiunto al form:", form.getAttribute('data-person'));