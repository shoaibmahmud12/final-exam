document.addEventListener("DOMContentLoaded", function () {
    const seafoodTypeSelect = document.getElementById("seafood-type");
    const seafoodWeightInput = document.getElementById("seafood-weight");
    const cookTimeResult = document.getElementById("cook-time-result");
  
    document.getElementById("calculate-cook-time").addEventListener("click", function () {
      const baseTime = 10; 
      const additionalTimePerPound = 5; 
  
      const selectedSeafood = seafoodTypeSelect.value;
      const seafoodWeight = parseFloat(seafoodWeightInput.value);
  
      if (selectedSeafood && !isNaN(seafoodWeight) && seafoodWeight > 0) {
        const cookTime = baseTime + (additionalTimePerPound * seafoodWeight);
        cookTimeResult.textContent = `Recommended cook time: ${cookTime} minutes`;
      } else {
        cookTimeResult.textContent = "Please select a seafood type and enter a valid weight.";
      }
    });
  });
  