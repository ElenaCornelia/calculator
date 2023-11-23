let calculation = localStorage.getItem('calculation') || '';

    displayCalculation();

    function updateCalculation(value) {
      calculation += value;
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    }

    function calculateResult() {
      try {
        calculation = eval(calculation);
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      } catch (error) {
        calculation = 'Error';
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }
    }

    function clearCalculation() {
      calculation = '';
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    }

    function displayCalculation() {
      document.querySelector('.js-calculation').textContent = calculation;
    }