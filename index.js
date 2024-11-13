//the whole entire globe
const messageMessage = console.log("'sad violin sounds'");
const massage = console.log("'rambunctious saxophone solo'");
const windowWindow = console.log("welcome to sign-in");

/*
Unit Test 1
"Multiplication" - this function returns the product of two values.
True = Input 5 and 6 would expect 30
True = Input 6 and 6 would expect 36
True = Input -10 and 3 would expect -30
*/

const multiplication = (x, y) => {
  return x * y;
};

/*
Unit Test 2
"concatOdds" - This is a function that concatenates two arrays.
True = Input [1, 2, 7, 7, 4] and [5, 6, 3, 8] would expect [1, 3, 5, 7]
True = Input [1, 2, 3, 4] and [5, 6, 7, 8] would expect [1, 3, 5, 7]
True = Input [1, 2, 3, 4] and [5, 6, 7, 8, 9] would expect [1, 3, 5, 7, 9]
*/

const concatOdds = (firstArray, secondArray) => {
  const thirdArray = firstArray.concat(secondArray);
  const fourthArray = thirdArray.sort();
  const fifthArray = [...new Set(fourthArray)];
  const finalArray = fifthArray.filter(
    (finalProduct) => finalProduct % 2 === 1
  );
  return finalArray;
};

const cartCheckout = (thingThing) => {
  return thingThing;
};

const nextPage = (theNextPage) => {
  return theNextPage;
};

module.exports = { multiplication, concatOdds, cartCheckout, nextPage };
