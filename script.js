
//adds event listeners to buttons
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "You are " + personalityResult

//getPersonality for most number of occurances
  function getPersonality() {

    let resultsCount = {
      donatello: 0,
      raphael: 0,
      michelangelo: 0,
      leonardo: 0
    }

    let toppingChoice = document.querySelector('input[name="topping"]:checked');
    let weaponChoice = document.querySelector('input[name="weapon"]:checked');
    let colorChoice = document.querySelector('input[name="color"]:checked');

    //adds occurances to resultsCount object
    resultsCount[toppingChoice.className]++;
    resultsCount[weaponChoice.className]++;
    resultsCount[colorChoice.className]++;

    //loops through resultsCount and returns key with highest value
    let currentHighestValue = 0;
    let currentHighestKey = "";
    for (var key in resultsCount) {
      if (resultsCount[key] > currentHighestValue) {
        currentHighestValue = resultsCount[key];
        currentHighestKey = key;
      }
    }
    return currentHighestKey;




    toppingChoice.checked = false;
    weaponChoice.checked = false;
    colorChoice.checked = false;
  }

}

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = ""

}







































//
//POSSIBLE SOLUTION:

//
// //elements to be used by multiple functions
// let displayResult = document.getElementById("result")
//
//
//
// //gets personality and manipulates HTML
// function processResults() {
//   console.log("[Get My Results - Button Clicked]")
//   let personality = getPersonality();
//   console.log("Result Personality: " + personality)
//   displayResult.innerHTML = "You are " + personality + "!"
// }
//
//
//
// //get personality - pulls choices and returns result to processResults()
// function getPersonality() {
//   let toppingChoice = document.querySelector('input[name="topping"]:checked');
//   // console.log(toppingChoice)
//   let weaponChoice = document.querySelector('input[name="weapon"]:checked');
//   let colorChoice = document.querySelector('input[name="color"]:checked');
//
//   let totalScore = 0;
//   totalScore += toppingPoints[toppingChoice.id]
//   console.log("Topping Chosen: " + toppingChoice.id + " worth " + toppingPoints[toppingChoice.id] + " point(s).")
//   totalScore += weaponPoints[weaponChoice.id]
//   console.log("Weapon Chosen: " + weaponChoice.id + " worth " + weaponPoints[weaponChoice.id] + " point(s).")
//   totalScore += colorPoints[colorChoice.id]
//   console.log("Color Chosen: " + colorChoice.id + " worth " + colorPoints[colorChoice.id] + " point(s).")
//   console.log("Total Score: " + totalScore)
//
//   if (totalScore <= 1) {
//     return "michelangelo"
//   } else if (totalScore <= 3) {
//     return "raphael"
//   } else if (totalScore <= 5) {
//     return "donatello"
//   } else {
//     return "leonardo"
//   }
// }
//
//
// //reset quiz
// function resetQuiz() {
//   console.log("[Reset Quiz - Button Clicked]")
//   toppingChoice.checked = false;
//   weaponChoice.checked = false;
//   colorChoice.checked = false;
//   toppingChoice = undefined;
//   weaponChoice = undefined;
//   colorChoice = undefined;
//   displayResult.innerHTML = "";
// }
//
//

// 1) What is your favorite pizza topping?
// pepperoni (+1)
// mushroom (+0)
// green peppers (+2)
// pineapple (+0)
//
// 2) What is your favorite ninja weapon?
// katana (+0)
// bo staff (+1)
// sai daggers (+1)
// nunchucks (+2)
//
//
// 3) What is your favorite ninja color?
// blue (+2)
// purple (+1)
// red (+0)
// orange (+3)
