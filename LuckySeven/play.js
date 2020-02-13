function hideResults() {
    
    document.getElementById("results").style.visibility = "hidden";
  }
  
  function validated() {
    
    var bet = document.forms["gameForm"]["startingBet"].value;
  
    if (bet == "") {
      alert("Have to pay to play.");
      return false;
    } else if (bet == 0) {
      alert("Enter a number.");
      return false;
    } else {
      return true;
    }
  }
  
  function rollTheDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playGame() {
  
    if (validated()) {
      // Select the form by name, then select input form by name, grab input value
      const startingBet = document.forms["gameForm"]["startingBet"].value;
      // Will turn the "string" startingBet value to a number startingBet value
      var money = parseInt(startingBet);
      // Will hold the array of numbers
      const tallyMoney = [];
      // Add the startingBet to the beginning of array of tallyMoney
      // And will return a new length
      tallyMoney.unshift(money);
  
      // While the money is greater than 0, begin the loop
      while (money > 0) {
        // Roll the first dice
        var dice1 = rollTheDice();
        // Roll the second dice
        var dice2 = rollTheDice();
        // Add the first and second dice rolls together
        var rolledDice = dice1 + dice2;
  
        // If the sum of rolledDice is not equal to 7
        if (rolledDice != 7) {
          // Lose $1 from Total
          money -= 1;
          // Add the changed money to the end of tallyMoney array
          tallyMoney.push(money);
        // If the sum of rolledDice is equal to 7
        } else {
          // Roll won
          money += 4;
          // Add new total
          tallyMoney.push(money);
        }
      }
  
      // Keeps track of how many rolls were taken
      var tallyRolls = tallyMoney.length - 1;
  
      // Keeps track of the total amount of money held by the user
      const add = (a, b) => a + b;
      const sumofMoney = tallyMoney.reduce(add);
  
      // number of rolls during most money held
      const heldMostMoney = Math.max.apply(null, tallyMoney);
  
      // index of highest money held
      var getIndexOfTallyMoney = tallyMoney.indexOf(heldMostMoney);
  
      // If the highest amount held was the starting money, the roll count should be 0
      if (heldMostMoney == startingBet) {
        var rollCountToHighestAmountHeld = getIndexOfTallyMoney;
      } else {
        rollCountToHighestAmountHeld = getIndexOfTallyMoney + 1;
      }
  
      function showResults() {
        document.getElementById("results").style.visibility = "visible";
        document.getElementById("resultsStartingBet").textContent = "$" + startingBet;
        document.getElementById("resultsTotalRollBeforeBroke").textContent = tallyRolls;
        document.getElementById("resultsHighestAmountHeld").textContent = "$" + heldMostMoney;
        document.getElementById("resultsRollCountHighestAmountHeld").textContent = rollCountToHighestAmountHeld;
        document.getElementById("play").textContent = "Play Again";
        document.getElementById("play").type = "reset";
      }
  
      showResults();
  
    }
  }