// Excercise #1
function greet(name){
    console.log("Hi",name);
}
greet("Jerome");


// Excercise #2
//Single Arithmetic function
//Add
function add(num1,num2){
    console.log(num1+num2);
}
add(1,2);
//Subtract
function subtract(num1,num2){
    console.log(num1-num2);
}
subtract(1,2);
//Multiplication
function multiplication(num1,num2){
    console.log(num1*num2);
}
multiplication(1,2);
//Division
function division(num1,num2){
    console.log(num1/num2);
}
division(1,2);

//Different arithmetic in one function
function arithmetic(method,num1,num2){
    switch(method) {
        case "add":
            console.log(num1+num2);
          break;
        case "subtract":
            console.log(num1-num2);
          break;
        case "multiplication":
            console.log(num1*num2);
            break;
        case "division":
            console.log(num1/num2);
            break;
        default:
            console.log("Unidentified Arithmetic");
      } 

}
arithmetic("subtract",2,2);

// Excercise #3
function isEven(num){
    if(num % 2 == 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
isEven(1);

// Excercise #4
function gradeCalculator(grade){
    if(grade >= 90){
        console.log("Grade: A");
    }
    else if(grade >= 80 && grade <=89){
        console.log("Grade: B");
    }
    else if(grade >= 70 && grade <=79){
        console.log("Grade: C");
    }
    else if(grade >= 60 && grade <=69){
        console.log("Grade: D");
    }
    else{
        console.log("Grade: F");
    }
}
gradeCalculator(8);