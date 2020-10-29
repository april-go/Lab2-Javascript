//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let myJob = `UX designer`
let myLocation = `Toronto`
let mySalary =`100000`
let myCompany =`Google`

console.log(`You will be a ${myJob} in ${myLocation}, making $${mySalary} for ${myCompany}.`)

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = `2020`
let birthYear =`1986`

currentAge = currentYear - birthYear
console.log(`They are ${currentAge} years old.`)


//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let myAge =`34`
let maxAge =`70`
let perDay =`2`

let snackConsumed = (maxAge - myAge) * perDay


console.log(`You will need ${snackConsumed} to last you until the ripe old age of ${maxAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius =`5`
let pi = Math.PI
let cir = 2 * pi * radius
let area = pi * radius ** 2

console.log(`The circumference is ${cir}`)
console.log(`The area is ${area}`)


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let currentCel =`10`
let currentFah =`20`
let celsius =(10 * 9/5) + 32
let fahrenheit =(32 - 32) * 5/9


console.log(`${celsius}°C is ${fahrenheit}°F`)
console.log(`${fahrenheit}°F is ${celsius}°C`)



// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num1) {
    return num1 ** 2
}
let n1 =9
let E1 = squareNumber(n1)


console.log(`The result of squaring the ${n1} is ${E1}.`)

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num2) {
    return num2 / 2
}

let n2 = 10
let E2= halfNumber(n2)


console.log(`Half of ${n2} is ${E2}.`)


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(per1, per2) {
    return per1 / per2*100
}
let p1 = 9
let p2 = 18
let E3 = percentOf(p1,p2)

console.log(`${p1} is ${E3}% of ${p2}`)

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(n1) {
    return n1 **2 * p
}
let p = 3.14
let E4 = areaOfCircle (n1)

console.log(`The area for a circle with radius of ${n1} is ${E4}`)

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll(n3) {

}

let n3 = 6
let a1 = halfNumber(n3)
let a2 = squareNumber(a1)
let a3 = areaOfCircle(a2)
let a4 = percentOf(a3,a2)

console.log(`Exercise no.5 
1) ans: ${a1} 
2) ans: ${a2} 
3) ans: ${a3}
4) ans: ${a4}%`)