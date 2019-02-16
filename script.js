
//adds event listeners to buttons
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log("Personality Result: " + personalityResult)

  resultArea.innerHTML = "You are " + personalityResult


//getPersonality() for most number of occurances
  function getPersonality() {
    //establish initial count
    let personCount = {
      michaelangelo: 0,
      raphael: 0,
      donatello: 0,
      leonardo: 0
    }
      //if class matches above, add it to the total
      let toppingChoice = document.querySelector('input[name="topping"]:checked');
      personCount[toppingChoice.className]++;
      let weaponChoice = document.querySelector('input[name="weapon"]:checked');
      personCount[weaponChoice.className]++;
      let colorChoice = document.querySelector('input[name="color"]:checked');
      personCount[colorChoice.className]++;


      //loop over the object and return the key with the highest count
      let currentHighestCount = 0;
      let currentHighestName = "";
      for (var key in personCount) {
        if (personCount[key] > currentHighestCount) {
          currentHighestCount = personCount[key];
          currentHighestName = key;
        }
      }
      return currentHighestName;


  }
}


     //getPersonality() for point system
//   function getPersonality() {
//     let toppingChoice = document.querySelector('input[name="topping"]:checked');
//     console.log(toppingChoice.id)
//     let weaponChoice = document.querySelector('input[name="weapon"]:checked');
//     console.log(weaponChoice.id)
//     let colorChoice = document.querySelector('input[name="color"]:checked');
//     console.log(colorChoice.id)
//     let totalPoints = 0; // 1
//     totalPoints = totalPoints + toppingPoints[toppingChoice.id]
//     totalPoints = totalPoints + weaponPoints[weaponChoice.id]
//     totalPoints = totalPoints + colorPoints[colorChoice.id]
//     console.log(totalPoints)
//
//     toppingChoice.checked = false;
//     weaponChoice.checked = false;
//     colorChoice.checked = false;
//
//     if (totalPoints <= 1) {
//       return "michelangelo"
//     } else if (totalPoints <= 3) {
//       return "raphael"
//     } else if (totalPoints <= 5) {
//       return "donatello"
//     } else {
//       return "leonardo"
//     }
//   }
//
// }

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = ""

}
//
// //point system
// let toppingPoints = {
//      pepperoni: 1,
//      mushroom: 0,
//      "green-peppers": 2,
//      pineapple: 0
// }
//
// let weaponPoints = {
//      katana: 0,
//      "bo-staff": 1,
//      "sai-daggers": 1,
//      nunchucks: 2
// }
//
// let colorPoints = {
//   blue: 2,
//   purple: 1,
//   red: 0,
//   orange: 3
// }







































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
