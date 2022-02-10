// Problem 1: ana to vori
// =================================

function anaToVori(ana) {
  // Error handling
  if (typeof ana != "number") {
    return "Please enter a solid number. Letter is not allowed!";
  } else if (ana <= 0) {
    return "Please enter a number greater than 0";
  }
  let vori = ana / 16;
  return vori;
}
console.log(anaToVori());

// Problem 2: pandaCost
// ======================================

function pandaCost(singaraQuantity, somuchaQuantity, zilapiQuantity) {
  // Error handling
  if (
    typeof singaraQuantity != "number" ||
    typeof somuchaQuantity != "number" ||
    typeof zilapiQuantity != "number"
  ) {
    return "Please enter a solid number";
  } else if (
    // May be anyone want only singara or somucha or zilapi so 0 is allowed.
    singaraQuantity < 0 ||
    somuchaQuantity < 0 ||
    zilapiQuantity < 0
  ) {
    return "Please enter a positive number";
  }
  // single item price
  const perSingara = 7;
  const perSomucha = 10;
  const perZilapi = 15;
  // Category wise items price
  const singaraPrice = singaraQuantity * perSingara;
  const somuchaPrice = somuchaQuantity * perSomucha;
  const zilapiPrice = zilapiQuantity * perZilapi;
  // After calculating total cost
  const totalCost = singaraPrice + somuchaPrice + zilapiPrice;
  return totalCost;
}
console.log(pandaCost(1, 0, 0));

// Problem 3: picnicBudget
// =====================================

function picnicBudget(traveller) {
  // Error handling
  if (typeof traveller != "number") {
    return "Please enter a solid number";
  } else if (traveller <= 0) {
    return "Please enter a number greater than 0";
  }
  let totalBudget;
  // if traveller quantity 200 plus
  if (traveller > 200) {
    let firstHundredCost = 100 * 5000;
    let secondHundredCost = 100 * 4000;
    let remainingCost = (traveller - 200) * 3000;
    totalBudget = firstHundredCost + secondHundredCost + remainingCost;
    // if traveller quantity 100 plus
  } else if (traveller > 100) {
    let firstHundredCost = 100 * 5000;
    let remainingCost = (traveller - 100) * 4000;
    totalBudget = firstHundredCost + remainingCost;
    // if traveller quantity less than or equal 100
  } else if (traveller <= 100) {
    totalBudget = traveller * 5000;
  }
  return totalBudget;
}
console.log(picnicBudget(400));

// Problem 4: oddFriend
// ==========================================

// const friends = ["Maher", "Mim", "Kawser", "Mahfuza", "Shahriar"];

function oddFriend(friends) {
  // Error handling
  if (!Array.isArray(friends)) {
    return "Please enter an array";
  } else if (friends.length < 2) {
    return "Please enter more than two string value with comma one must be odd characters ";
  } else if (typeof friends != "object") {
    return "Please enter an array variable name which contain multiple elements";
  }
  // blank array for storing data which is getting with condition from the inside of loop
  let bestFriend = [];
  for (const friend of friends) {
    if (friend.length % 2 == 1) {
      bestFriend.push(friend);
      break; // stop the looping after getting first odd element
    }
  }
  return bestFriend;
}
let getOddFriend = oddFriend();
console.log(getOddFriend);
