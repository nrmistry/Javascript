function checkPositivity(numbers) {
    return numbers.map(num => num > 0);
}

function areAllPositive(numbers) {
    return checkPositivity(numbers).every(value => value === true);
}

//first example 
//const numberArray = [2,4,5];

const numberArray = [-5,4,6];
const positivityArray = checkPositivity(numberArray);
console.log(positivityArray);

const allPositive = areAllPositive(numberArray);
console.log(allPositive);



//first attempt
//function allNumbersPositive(number) {
//    return numbers.map(num => num>0);
//}


//const numberArray = [1,2,3];
//const positivityArray = checkPositivity(numbersArray);
//console.log(positivityArray);//