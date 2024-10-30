//the whole entire globe
const messageMessage = console.log("'sad violin sounds'");
const massage = console.log("'rambunctious saxophone solo");
const windowWindow = console.log("welcome to sign-in");

const multiplication = (x, y) => {
  return x * y;
};

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
  if (thingThing === "true") {
    return massage;
  } else {
    return messageMessage;
  }
};

const nextPage = (theNextPage) => {
  if (theNextPage === "true") {
    return windowWindow;
  } else {
    return messageMessage;
  }
};

module.exports = { multiplication, concatOdds, cartCheckout, nextPage };
