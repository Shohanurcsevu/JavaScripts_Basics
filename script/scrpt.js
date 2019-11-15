/********************* 

This lecture about variables and datatypes



*/

var firstName = 'jhon';
console.log(firstName);
var lastName = 'smith';
var age = 25;
var fullage = true;

console.log(fullage);
//this are varible with 
var job;
job='teacher';
console.log(job);


var firstName = 'jhon';
var age = 28;
var job, isMarried;
//type coercion
job = 'teachr';
isMarried = false;
console.log(firstName + ' ' + age);
console.log(firstName + 'is a ' + age + 'years old'
    + job + '. Is he Married ?' + ' ' + isMarried);

//variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + 'is a ' + age + 'years old'
    + job + '. Is he Married ?' + ' ' + isMarried);
var lstname = prompt('What is the last Name');
console.log(firstName + " " + lstname);





/*basic operator
*/
var year, yearJohn, yearMark, firstString;
firstString = 'Age of';
year = prompt('Enter the Starting Year');
ageJhon = prompt('Enter The Age Of Jhon');
ageMArk = prompt('Enter The Age Of Mark');
age=34;
yearJohn = year - ageJhon;
yearMark = year - ageMArk;
console.log(firstString + ' ' + 'John' + ' ' + yearJohn);
console.log(firstString + ' ' + 'Mark' + ' ' + yearMark);

//logical operators
var jhonohnOlder = ageJhon < ageMArk;
console.log(jhonohnOlder);

// //typeof operator

console.log(typeof jhonohnOlder);
console.log(typeof age);
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
var ageJohn = now - yearJohn;
var ageMark = 35;
var average =(ageJohn + ageMark)  /2; 
console.log(average);

//Multiple Assigments

var x,y;

x = y =  (3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 - 6 // 26  
console.log(x , y);

x *= 2;
console.log(x);  
x++;
console.log(x);
x--;
console.log(x);  
var markMass, markHeight, johnMass, johnHeight, markMBI, johnBMI;
markMass = 60;
markHeight = 1.70688;
johnMass = 65;
johnHeight = 1.8288;
markMBI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

console.log('Mark MBI is '+ ' ' + markMBI);
console.log('John BMI is '+ ' '+johnBMI)

var  ismarkhigher= markMBI >= johnBMI;
console.log(ismarkhigher);







