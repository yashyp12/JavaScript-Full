// types of function in js

 
// assigmentents

// Q1 - . Function Declarations (Multi-Step Logic)
// Write a function that checks a student’s marks and prints their grade:

let marks = 56;

let checkMarks = () => {
    
    if(marks >= 90){
        console.log("Grade : A+")
    }else if(marks>=75){
        console.log("Grade : A")
    }else if(marks >=60){
        console.log("Grade : B")
    }else{
        console.log("Grade : Fail")
    }
};

checkMarks();


// Write a function that checks how strong a password is.
 let password = "yash@123";

function passwordValidation(){

    if(password.length <6){
        console.log("weak password");
    }
    else{
        console.log("Strong password");
    }
}
passwordValidation()


// ➤ Write a function that prints a person’s movie ticket price based on age:
let ticketPrice = 12;
let age = 21;

let checkTicketPrice = (age) =>{
    if(age<12) { console.log(ticketPrice = 50)
         console.log(`your ticket price is ${ticketPrice}`);
    }
    else if(age>12 && age<60){
        ticketPrice = 100
         console.log(`your ticket price is ${ticketPrice}`);
    }else if(age>60){
        ticketPrice = 70
        console.log(`your ticket price is ${ticketPrice}`);
    }
};

checkTicketPrice();


// Write a function that checks if a given year is a leap year or not.
let year = 2028;

let checkLeapYear = (year) =>{
    if(year%4 ==0 && year%100!=0){
        console.log("its an leap year")
    }else if(year%400 ==0){
        console.log("its is leap year");
    }else{
        console.log("it is not leap year")
    }
}

checkLeapYear(year);


// calculateElectricityBill(units)

let units = 1000;
let totalBill = 0;
let calculateElectricityBill = (units,totalBill)=>{

    if(units<=100){
        totalBill += units*5;
        console.log(`total bill is ` + totalBill );
    }else if(units>100 && units<200){
        totalBill += (units -100)* 7;
         console.log(`total bill is ` + totalBill );
    }else if(units>100 && units<200){
    } else if(units>200){
        totalBill += (units-200) * 10;
         console.log(`total bill is ` + totalBill );
    } 
}

calculateElectricityBill(units,totalBill)


// Function Expressions (Return Values + String Formatting)

let time = "04:35 am"
let names = "Yash"
let getMesage =  (time,names) =>{

    console.log(`Good ${time} , ${names}!`)
}

getMesage(time,names);


// calculateBonus(salary, yearsOfExperience)

let sal = 250 ;
let yoe = 5;
let bonus;
let calculateBonus = (yoe,sal)=>{
    if(yoe>=5){
        bonus = sal + sal*10/100;
        console.log(`your bonus amount is ` + bonus);
    }
    else{
        bonus = sal+ sal*5/100;
        console.log(`your bonus is ` + bonus);
    }
}
calculateBonus(yoe,sal);



// check palindrome
// Create a function expression that checks whether a word reads the same backward and forward (like "madam", "level").

let str ="aba"

let checkPalindrome = (str)=>{
    const cleanWord = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');

    const isPalindrome = cleanWord === cleanWord.split('').reverse().join('');

    if(isPalindrome){
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
let BMI ;
let calculateBMI = (height,weight) =>{
   BMI = weight / (height*height)
    if(BMI < 18.5){
        console.log("you are underweight")
    }else if(BMI >=18.5 && BMI<=24.9){
        console.log("normal");
    }else if(BMI >=25){
        console.log("you are overweight")
    }


}



