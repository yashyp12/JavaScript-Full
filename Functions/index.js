// types of function in js

 
// assigmentents

// Q1 - . Function Declarations (Multi-Step Logic)
// Write a function that checks a student’s marks and prints their grade:

marks = 50;

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

// ➤ Write a function that prints a person’s movie ticket price based on age:
let ticketPrice = 12;
let age = prompt("enter your age user");

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


