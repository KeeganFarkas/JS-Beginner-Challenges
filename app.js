console.log("Q1 Return the Sum of Two Numbers");

const addition = (num1, num2) => num1 + num2;

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

console.log("Q2 Convert Hours into Seconds");

const hoursIntoSeconds = (hours) => hours * 3600;

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

console.log("Q3 Calculate the Perimeter of a Rectangle");

const calcPerimeter = (l, w) => 2 * (l + w);

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

console.log("Q4 Calculate the Area of a Triangle");

const calcTriangleArea = (base, height) => 0.5 * base * height;

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

console.log("Q5 Extend a String");

const appendFrontend = (str) => str + "Frontend";

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));

console.log("Q6 Greater than 100");

const sumGreaterThan100 = (num1, num2) => num1 + num2 > 100;

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));

console.log("Q7 Less than or Equal to Zero");

const lessThanOrEqualToZero = (num) => num <= 0;

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

console.log("Q8 Opposite Boolean");

const oppositeBoolean = (bool) => !bool;

console.log(oppositeBoolean(true));
console.log(oppositeBoolean(false));

console.log("Q9 Is not the Number 0");

const isNotZero = (num) => num !== 0;

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

console.log("Q10 Calculate the Remainder");

const calcRemainder = (num1, num2) => num1 % num2;

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

console.log("Q11 Is the Number Odd");

const isOdd = (num) => num % 2 === 1;

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

console.log("Q12 If a Number is Even, Return 1 Otherwise Return -1 ");

const booleanInteger = (num) => (num % 2 === 0 ? 1 : -1);

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

console.log("Q13 Check if a User is Logged in AND Subscribed");

function isLoggedInAndSubscribed(login, sub) {
  return login === "LOGGED_IN" && sub === "SUBSCRIBED";
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED"));

console.log("Q14 Check if a User is Logged In OR Subscribed");

function isLoggedInOrSubscribed(login, sub) {
  return login === "LOGGED_IN" || sub === "SUBSCRIBED";
}

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"));
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"));
