// types of function in js


// assigmentents

// Q1 - . Function Declarations (Multi-Step Logic)
// Write a function that checks a student’s marks and prints their grade:

let marks = 56;

function checkMarks   ()  {

    if (marks >= 90) {
        console.log("Grade : A+")
    } else if (marks >= 75) {
        console.log("Grade : A")
    } else if (marks >= 60) {
        console.log("Grade : B")
    } else {
        console.log("Grade : Fail")
    }
};

checkMarks();


// Write a function that checks how strong a password is.
let password = "yash@123";

function passwordValidation() {

    if (password.length < 6) {
        console.log("weak password");
    }
    else {
        console.log("Strong password");
    }
}
passwordValidation()


// ➤ Write a function that prints a person’s movie ticket price based on age:
let ticketPrice = 12;
let age = 21;

function checkTicketPrice(age) {
    if (age < 12) {
        console.log(ticketPrice = 50)
        console.log(`your ticket price is ${ticketPrice}`);
    }
    else if (age > 12 && age < 60) {
        ticketPrice = 100
        console.log(`your ticket price is ${ticketPrice}`);
    } else if (age > 60) {
        ticketPrice = 70
        console.log(`your ticket price is ${ticketPrice}`);
    }
};

checkTicketPrice();


// Write a function that checks if a given year is a leap year or not.
let year = 2028;

function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log("its an leap year")
    } else if (year % 400 == 0) {
        console.log("its is leap year");
    } else {
        console.log("it is not leap year")
    }
}

checkLeapYear(year);


// calculateElectricityBill(units)

let units = 1000;
let totalBill = 0;
function calculateElectricityBill(units, totalBill) {

    if (units <= 100) {
        totalBill += units * 5;
        console.log(`total bill is ` + totalBill);
    } else if (units > 100 && units < 200) {
        totalBill += (units - 100) * 7;
        console.log(`total bill is ` + totalBill);
    } else if (units > 100 && units < 200) {
    } else if (units > 200) {
        totalBill += (units - 200) * 10;
        console.log(`total bill is ` + totalBill);
    }
}

calculateElectricityBill(units, totalBill)


// Function Expressions (Return Values + String Formatting)

let time = "04:35 am"
let names = "Yash"
let getMesage = (time, names) => {

    console.log(`Good ${time} , ${names}!`)
}

getMesage(time, names);


// calculateBonus(salary, yearsOfExperience)

let sal = 250;
let yoe = 5;
let bonus;
let calculateBonus = (yoe, sal) => {
    if (yoe >= 5) {
        bonus = sal + sal * 10 / 100;
        console.log(`your bonus amount is ` + bonus);
    }
    else {
        bonus = sal + sal * 5 / 100;
        console.log(`your bonus is ` + bonus);
    }
}
calculateBonus(yoe, sal);



// check palindrome
// Create a function expression that checks whether a word reads the same backward and forward (like "madam", "level").

let str = "aba"

let checkPalindrome = (str) => {
    const cleanWord = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');

    const isPalindrome = cleanWord === cleanWord.split('').reverse().join('');

    if (isPalindrome) {
        console.log(`"${str}" is a Palindrome`);
    }
    else {
        console.log(`"${str}" is not an palindrome`);
    }
};


checkPalindrome(str);


// calculate BMIl
let height = 5.5;
let weight = 55;
let BMI;
let calculateBMI = (height, weight) => {
    BMI = weight / (height * height)
    if (BMI < 18.5) {
        console.log("you are underweight")
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("normal");
    } else if (BMI >= 25) {
        console.log("you are overweight")
    }


}



// ARROW FUNCTION
// ➤ Write an arrow function that returns numeric grade points:
let grade  = "A+";
let gradepoints = (grade) =>{
    switch(String(grade).trim().toUpperCase()){
        case "A+": return 10;
        case "A": return 9;
        case "B": return 8;
        case "C": return 7;
        case "D": return 6;
        default: return 0;

    }
};

console.log(gradepoints(grade));

//  ➤ Write an arrow function that prints a message based on the hour (24-hour format):
let hour = 17;
let timePrint = (hour) =>{

    if(hour<12){
        console.log("good mronign ");
    }else if(hour >12 && hour <17){
        console.log("good afternoon")
    }else{
        console.log("good evening")
    }
}

timePrint(hour);

// Write an IIFE that creates a random number between 1 and 50 and prints whether it’s a prime number or not.

(function(){
const n = 3;
const isPrime = (x) =>{
    if(x<2) return false;
    for(let i =2; i<=x/2; i++){
        if(x%i==0) return false;
    }
    return true;
};

console.log(`number: ${n} ${isPrime(n)?'prime':'not prime'}`);

})();


// leap year ieee
(function(){
    const year = 2024;
    const isLeap = (x) =>{
        if(x %4 ==0 && x%100 !=0){
           return true;
        }else if(x%400 ==0){
            return true;
        }else{
            return false;
        }
    }

    console.log(` year ${year} is an ` + isLeap(year));
})();

// Write an IIFE that calculates Simple Interest using P = 1000, R = 5, T = 2 and prints the result.
(function (){
    let P = 1000;
    let R = 5;
    let T = 2;

    const IntrestCal =(P,R,T) =>{
        const SI = (P*R*T)/100;
        console.log(`simple intrest  =  ${SI}`);
        return SI;
    };

    IntrestCal(P,R,T);
})();

// Write an IIFE that finds the sum of digits of a given 3-digit number (for example, 372 → 12).

(function(){
    let digit = 353;
   
    const DigitSum = (digit)=>{
         let sum = 0;
        while(digit!==0){
            sum += digit%10;
            digit/=10;
        }
        console.log(`the sum is  ${sum}`)
        return sum;
    }

    
    console.log( DigitSum(digit));
})();


// studentName = "Rahul"
// ➤ Declare a variable studentName = "Rahul" and use an arrow function to print:
// "Hello Rahul, your name has [number of letters] letters."
// (Hint: use .length property)

let studentName = "rahul";
const printName = (studentName)=>{
console.log(`hellp ${studentName},your names has ${String(studentName).length}`)
};
printName(studentName);


/*
calculateBill(cost, discountPercent)
➤ Write a normal function that takes cost and discount percentage, 
then prints the final amount after applying the discount.
*/
function calculateBill(cost,discountPercent){
        const discountAmount = (cost*discountPercent)/100;
        const finalAmount = cost - discountAmount;
        console.log(`the final amount ${discountPercent} is ${finalAmount}`)
}
calculateBill(1000,5);


// ➤ Write a function expression that prints how many hours are left until midnight.
// (Example: if it’s 18, print “6 hours left for midnight”)

const timeLeft = function(currentHour){

      if (typeof currentHour !== 'number' || currentHour < 0 || currentHour > 23) {
        console.log("Invalid hour. Use 0-23.");
        return;
    }
    
    const hours = 24 - Math.floor(currentHour);
    console.log(`${hours}  hours are left for midnight`);
};

timeLeft(18);


// // 4) IIFE to convert Celsius to Fahrenheit (pass Celsius when invoking)
(function(celcius){
    const fahrenheit = celcius * 9/5 + 32;
    console.log(`${celcius}C = ${fahrenheit}F`);
})(25);


// 5) arrow function checkEligibility(age, citizenship)
checkEligibility = (age,citizenship) =>{
    const isIndian = String(citizenship).trim().toLowerCase() === 'indian';
    console.log((age>=18 && isIndian)? "you can vote":"not eligible");
};
checkEligibility(20,'indian');