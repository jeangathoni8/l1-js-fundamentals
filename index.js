// UTILITY
function printValue(value){
    console.log(value);
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const fixedNumber = 10;

//TODO: ADD redeclarable variable
let redeclarableBoolean = true;

//TODO: ADD re-assignable but not redeclarable variable
const reassignableString = 'Hello, World!';

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const fixedNumberValue = 42;

//TODO: Create a redeclarable variable with a boolean value
let redeclarableBooleanValue = true;

//TODO: Create a re-assignable variable with a string value
let reassignableStringValue = 'Hello, World!';


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
const concatenatedString = 'Hello, ' + 'World!' ;

//TODO: Interpolate string (`${}`)
const interpolatedString = `Hello, ${reassignableStringValue}`;

//TODO: Convert to uppercase
const uppercasedString = reassignableStringValue.toLocaleUpperCase();

//TODO: Convert to lowercase
const lowercasedString = reassignableStringValue.toLocaleLowerCase();

//TODO: Index a specific character
const firstCharacter = reassignableStringValue[0];

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
const strictEquality = fixedNumberValue  === 42;

//TODO: strict inequality
const strictInequality = fixedNumberValue  !==  42;

//TODO: equality
const equality = fixedNumberValue  ==  42;

//TODO: inequality
const inequality = fixedNumberValue  != 41;

//TODO: greater than
const greaterthan = fixedNumberValue  > 40;

//TODO: less than
const lessthan = fixedNumberValue  < 42;

//TODO: greater or equal to
function greaterOrEqualto(a,b){
    return a >= b;
}

//TODO: less or equal to
function lessOrEqualTo(a,b){
    return  a <= b;
}


// 5.0 CONTROL FLOW
// TODO: if-else statement
function ifElseExample(value){
    if (value > 10) {
        printValue('Value is greater than 10');
    } else if  (value < 10 ) {
        printValue('Value is less than 10');
    } else {
        printValue('Value is equal to 10');
    }
    }

//TODO: switch-case
function switchCaseExample(value){
    switch (value) {
      case "A":
        printValue("Got A");
        break;
        case "B":
        printValue("Got B");
        break;
        default:
        printValue('Got nothing!');
    }
}





