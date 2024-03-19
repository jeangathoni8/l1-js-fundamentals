// UTILITY
function printValue(value){
    console.log(value);
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const fixedNumber = 10;
console.log(fixedNumber)
//TODO: ADD redeclarable variable
let redeclarableBoolean = true;
console.log(redeclarableBoolean)
//TODO: ADD re-assignable but not redeclarable variable
const reassignableString = 'Hello, World!';
console.log(reassignableString)
// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const fixedNumberValue = 42;
console.log(fixedNumber)
//TODO: Create a redeclarable variable with a boolean value
let redeclarableBooleanValue = true;
console.log(redeclarableBooleanValue)
//TODO: Create a re-assignable variable with a string value
let reassignableStringValue = 'Hello, World!';
console.log(reassignableStringValue)

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
const concatenatedString = 'Hello, ' + 'World!' ;
console.log(concatenatedString)

//TODO: Interpolate string (`${}`)
const interpolatedString = `Hello, ${reassignableStringValue}`;
console.log(interpolatedString)

//TODO: Convert to uppercase
const uppercasedString = reassignableStringValue.toLocaleUpperCase();
console.log(uppercasedString)

//TODO: Convert to lowercase
const lowercasedString = reassignableStringValue.toLocaleLowerCase();
console.log(lowercasedString)

//TODO: Index a specific character
const firstCharacter = reassignableStringValue[0];
console.log(firstCharacter)

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
const strictEquality = fixedNumberValue  === 42;
console.log(strictEquality); //true if the values and types are identical

//TODO: strict inequality
const strictInequality = fixedNumberValue  !==  42;
console.log(strictInequality)

//TODO: equality
const equality = fixedNumberValue  ==  42;
console.log(equality) // true if the values are equal 

//TODO: inequality
const inequality = fixedNumberValue  != 41;
console.log(inequality)

//TODO: greater than
const greaterthan = fixedNumberValue  > 40;
console.log(greaterthan)

//TODO: less than
const lessthan = fixedNumberValue  < 42;
console.log(less than)

//TODO: greater or equal to
function greaterOrEqualto(a,b){
    return a >= b;
}
console.log(a >= b)

//TODO: less or equal to
function lessOrEqualTo(a,b){
    return  a <= b;
}


// 5.0 CONTROL FLOW
// TODO: if-else statement
function ifElseExample(value){
    if (value > 10) {
        console.log('Value is greater than 10');
    } else if  (value < 10 ) {
        console.log('Value is less than 10');
    } else {
        console.log('Value is equal to 10');
    }
    }

//TODO: switch-case
function switchCaseExample(value){
    switch (value) {
      case "A":
        console.log("Got A");
        break;
        case "B":
        console.log("Got B");
        break;
        default:
        console.log('Got nothing!');
    }
}





