function findNforPerfectSquare(input) {
  const arrayContainNumber = [];
  const arrayContainAnswer = [];
  let arrayPerCase = [];
  for (let i = 1; i <= input; i++) {
    const perfectSquareNumber = i * i;
    arrayContainNumber.push(perfectSquareNumber);
    if (perfectSquareNumber > input) {
      // remove last round perfectSquareNumber
      arrayContainNumber.pop();
      for (let [index, perfectSquare] of arrayContainNumber.entries()) {
        arrayPerCase = [];
        const checkMod = input % perfectSquare;
        if (perfectSquare !== 1) {
          // perfect case
          if (checkMod === 0) {
            let tempInput = input;
            while (tempInput - perfectSquare >= 0) {
              arrayPerCase.push(perfectSquare);
              tempInput = tempInput - perfectSquare;
            }
            arrayContainAnswer.push(arrayPerCase);
            break;
          } else {
            // normal case
            let tempInput = input;
            let tempPerfectSquare = perfectSquare;
            let countIndex = index;
            while (tempInput - tempPerfectSquare >= 0) {
              arrayPerCase.push(tempPerfectSquare);
              tempInput = tempInput - tempPerfectSquare;
              while (tempInput - tempPerfectSquare < 0) {
                tempPerfectSquare = arrayContainNumber[countIndex - 1];
                countIndex = countIndex - 1;
              }
            }
          }
        }
        if (arrayPerCase.length > 1) {
          arrayContainAnswer.push(arrayPerCase);
        }
      }
      break;
    }
  }
  const bestCase = arrayContainAnswer.reduce((a, b) => a.length <= b.length ? a : b)
  console.log('bestCase: ', bestCase);
  console.log("n: ", bestCase.length);
  return bestCase.length;
}

module.exports = findNforPerfectSquare;