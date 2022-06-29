// Write a JavaScript program which iterates
// the integers from 1 to 100. But for
// multiples of three print "Fizz" instead
// of the number and for the multiples of five print
// "Buzz". For numbers which are multiples 
// of both three and five print "FizzBuzz".
t=1
l=100
for(var r=t;r<=l;r++){
     if(r%3==0 && r%5==0){
        console.log(r +"FizzBuzz")
    }
    else if(r%3==0){
        console.log(r+ "Fizz")
    }
    else if(r%5==0){
        console.log(r+ "Buzz")
    }
  
    else{
        console.log(r)
    }
}

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum=0
for (var y=1;y<=1000;y++){
    if(y%3==0 && y%5==0){
        sum+=y
    }
}
console.log(sum)

// Write a JavaScript for loop that will iterate from 0 to 20.
// For each iteration, it will check if the current number is
// odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
y=0;
c=20;
for(var i=y;i<=c;i++){
if (i % 2 == 0) {
    console.log(i + " is even");   
}
else {
    console.log(i + " is odd");
}
}



// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

let num=[-2,4,-5,6,0]
let largest=0
for(h in num){
    if(num[h]>largest){
        largest=num[h]}
    }
console.log(largest)


// // Using conditional statements, write a JavaScript program to find the largest of the
// // following two numbers: 10 & 40
v=10
k=40
if (k>v|| k<v){
    console.log("Greater than");
}
else{
    console.log ("Not greater than");
}



// // Write a JavaScript program to find leap years from 2000 to 2022
// // program to check leap year

function checkLeapYear() {
for(let year=2000;year<=2022;  year++){
    if (year % 4===0 && year % 100 != 0 || year % 400 == 0) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    } 
}
} 
checkLeapYear()

