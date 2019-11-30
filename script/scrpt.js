// /********************* 

// This lecture about variables and datatypes



// */

// var firstName = 'jhon';
// console.log(firstName);
// var lastName = 'smith';
// var age = 25;
// var fullage = true;

// console.log(fullage);
// //this are varible with 
// var job;
// job='teacher';
// console.log(job);


// var firstName = 'jhon';
// var age = 28;
// var job, isMarried;
// //type coercion
// job = 'teachr';
// isMarried = false;
// console.log(firstName + ' ' + age);
// console.log(firstName + 'is a ' + age + 'years old'
//     + job + '. Is he Married ?' + ' ' + isMarried);

// //variable mutation
// age = 'twenty eight';
// job = 'driver';
// alert(firstName + 'is a ' + age + 'years old'
//     + job + '. Is he Married ?' + ' ' + isMarried);
// var lstname = prompt('What is the last Name');
// console.log(firstName + " " + lstname);





// /*basic operator
// */
// var year, yearJohn, yearMark, firstString;
// firstString = 'Age of';
// year = prompt('Enter the Starting Year');
// ageJhon = prompt('Enter The Age Of Jhon');
// ageMArk = prompt('Enter The Age Of Mark');
// age=34;
// yearJohn = year - ageJhon;
// yearMark = year - ageMArk;
// console.log(firstString + ' ' + 'John' + ' ' + yearJohn);
// console.log(firstString + ' ' + 'Mark' + ' ' + yearMark);

// //logical operators
// var jhonohnOlder = ageJhon < ageMArk;
// console.log(jhonohnOlder);

// // //typeof operator

// console.log(typeof jhonohnOlder);
// console.log(typeof age);
// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 18;
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average =(ageJohn + ageMark)  /2; 
// console.log(average);

// //Multiple Assigments

// var x,y;

// x = y =  (3 + 5) * 4 - 6;// 8 * 4 - 6 // 32 - 6 // 26  
// console.log(x , y);

// x *= 2;
// console.log(x);  
// x++;
// console.log(x);
// x--;
// console.log(x);  
// var markMass, markHeight, johnMass, johnHeight, markMBI, johnBMI;
// markMass = 78;
// markHeight = 1.69;
// johnMass = 92;
// johnHeight = 1.95;
// markMBI = markMass / (markHeight * markHeight);
// johnBMI = johnMass / (johnHeight * johnHeight);

// console.log('Mark BMI is '+ ' ' + markMBI);
// console.log('John BMI is '+ ' '+johnBMI)

// var  ismarkhigher= markMBI >= johnBMI;
// console.log('Is Mark\s BMI is higher than John?'+' '+ ismarkhigher);

/*****************
 * 
 * if Else Statment
 */

// var firstName = 'John';
// var civilStatus = 'single';
// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');


// } else {

//     console.log(firstName + 'hopefully marray soon !!!');
// }

// var isMarried = false;

// if (isMarried) {
//     console.log(firstName + ' Is Married')
// } else {

//     console.log(firstName + ' ' + 'Is n\'t Married');
// }


// var markMass, markHeight, johnMass, johnHeight, markMBI, johnBMI;
// markMass = 78;
// markHeight = 1.69;
// johnMass = 92;
// johnHeight = 1.95;
// markBMI = markMass / (markHeight * markHeight);
// johnBMI = johnMass / (johnHeight * johnHeight);

// if(markMBI > johnBMI){

//     console.log('Mark\s BMI is higher than the John\s BMI');
// } else {
//     console.log('John\s BMI is Higher than the Marks BMI');
// }

// var firstName = 'John'
// var age = 20;
// if (age < 13) {
//     console.log(firstName + ' ' + 'is a boy');
// } else if (age >= 13 && age < 20) {  //Btween 1 and 20
//      console.log(firstName + ' '+ 'is a teenager ')

// }else if(age>=20 && age <30){
//     console.log(firstName + ' '+ 'is a young man')

// }else {
//     console.log(firstName + ' ' + 'is man');
// }

// var fName = 'John'
// var  age = 16;
// age >= 18 ? console.log(fName +' '+' drinks bear')
// : console.log(fName + ' '+ ' drink juice')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// var job = 'teacher';
// switch (job){
//     case 'teacher':
//         console.log(fName + ' '+ ' teacher knows how to code. ');
//         break;
//     case 'driver':
//             console.log(fName + ' '+ ' drive uber. ');
//             break;
//     case 'designer':
//             console.log(fName + ' '+ ' design beautiful websites. ');
//             break;
//     default:
//             console.log(fName + ' '+ ' does something. ');


// }

// var age=28;

// switch(true){
//     case age < 13 :
//         console.log(fName + ' ' + ' is a boy');
//         break;
//     case age >= 13 && age < 20 :
//         console.log(fName + ' '+ ' is a teeanage');
//         break;
//     case age >= 20 && age <30:
//         console.log(fName + ' ' + ' is a young boy');
//         break;
//     case age >= 30 && age <90 :
//         console.log(fName + ' '+ ' is aged man');
//         break;
//     default:
//         console.log(fName + ' ' + ' is a MAN');

// }

/****
 * 
 * Truthy and Falsy values and equality operators
 */
// var height;
// height=0;
// if (height || height === 0){
//     console.log('Variable is defined');
// }else {
//     console.log('Variable isn\'t defined');
// }
// var johnsTeamScore,mikesTeamScore,marryTeamScore;
// johnsTeamScore = (89 + 120 + 103) /3;
// mikesTeamScore = (89 + 120 + 56) /3;
// marryTeamScore = (89 + 120 + 108) /3;

// switch(true){
//     case johnsTeamScore > mikesTeamScore && johnsTeamScore> marryTeamScore:
//         console.log('Winer Team is Jhon\'s team');
//         break;
//     case johnsTeamScore < mikesTeamScore && marryTeamScore < mikesTeamScore  :
//         console.log('Winner Team is mikes  Team');
//         break;
//     case marryTeamScore > johnsTeamScore && marryTeamScore > mikesTeamScore:
//         console.log('Winner is Marry\'s Team');
//         break;
//     default:
//         console.log('match draw');       
// }
/**
 * Functions
 */

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJhon = calculateAge(1990);
// var ageMike = calculateAge(1995);
// var ageJane = calculateAge(1994);
// console.log(ageJhon, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {

//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     retirement > 0 ? console.log(firstName + ' ' + ' reires in ' + ' ' +
//     retirement)
//     : console.log('Already Reired')



// } 

// yearsUntilRetirement(1994,'Shohan');
// yearsUntilRetirement(1948,'Jane');
// yearsUntilRetirement(1996,'Mike');

/**
 * Functions Statements and Expressions
 */

//Function expression

// var whatYouDo = function(job, firstName) {

//     switch (job) {
//         case 'teacher':
//             return console.log('Hey ' + ' ' + firstName + ' ' +
//                 ' taching is a good profession');

//         case 'designer':
//             return console.log('Hey ' + ' ' + firstName + ' ' +
//                 ' Designers are more creactive');

//         case 'developer':
//             return console.log('Hey ' + ' ' + firstName + ' ' +
//                 ' developer has no life');

//         default:
//             return console.log('Doing Nothinh !, Enjoy your life');

//     }


// }


// console.log(whatYouDo('designer' , 'John' ));

// var names = ['John', 'Mark', 'Jane'];
// console.log(names[0]);
// console.log(names.length);
// names[5] = 'Ben';
// console.log(names);
// names[names.length] = 'Marry';
// console.log(names);

// //Diffrent data type

// var john = ['John', 'Smith', 1994, 'designer', false];
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();

// console.log(john);
// var s = john.indexOf(46);
// console.log(s);

// var isdesigner = john.indexOf('designer') === -1 ? "John is'nt a Designer" : "John is a Designer";

// console.log(isdesigner);


// function tipsCalculator(bill) {
//     var percentage;

//     switch (true) {

//         case bill < 50:
//             percentage = .2;
//             break;
//         case bill >= 50 && bill < 200:
//             percentage = .15;
//             break;

//         default:
//             percentage = .1;
//     }

//     return percentage * bill;


// }

// var bill = [124, 48, 268];
// var tips = [tipsCalculator(bill[0]), tipsCalculator(bill[1]), tipsCalculator(bill[2])];
// var finalResult = [bill[0] + tips[0],
// bill[1] + tips[1],
// bill[2] + tips[2]
// ];
// console.log(finalResult);


// var john = {

//     firstName : 'John',
//     lastName : 'Smith',
//     birthYear : 1994,
//     family : ['Jane','Mark', 'Emely'],
//     job : 'teacher',
//     isMarried : false


// }
//  var x= 'birthYear';


// console.log(john[x]);

// john.job='designer';
// john['isMarried'] = true;

// console.log(john);

// var Jane= new Object();

// Jane.firstName ='Jane';
// Jane['lastName']= 'Smith';
// Jane.birthYear= 1995;
// console.log(Jane);

// var john = {

//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 2002,
//     family: ['Jane', 'Mark', 'Emely'],
//     job: 'teacher',
//     isMarried: false,
//     calAge: function()
//     {
//         this.age= 2018-this.birthYear;
//     },


// };

// john.calAge();

// console.log(john);


// var jhon = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 64,
//     height: 1.56,
//     calBMI: function BMI() {
//         return this.mass / (this.height * this.height);
//     }
// }

// var mark = {

//     firstName: 'Mark',
//     lastName: 'Lane',
//     mass: 68,
//     height: 1.56,
//     calBMI: function BMI() {
//         return this.mass / (this.height * this.height);
//     }
// }


// var johnBMI = jhon.calBMI();
// var markBMI = mark.calBMI();

// // console.log(jhon.firstName +" " +jhon.lastName + " "+ johnBMI );
// // console.log(mark.firstName +" "+mark.lastName +" "+markBMI);

// var finalResult = function (jhonBMI, markBMI) {

//     switch (true) {
//         case jhonBMI > markBMI:
//             return console.log(jhon.firstName + ' ' + jhon.lastName + ' ' + jhonBMI);
//             break;
//         case markBMI > jhonBMI:
//             return console.log(mark.firstName + ' ' + mark.lastName + ' ' + markBMI);
//             break;
//         default:
//             console.log('Both has same BMI');
//     }
// }

// finalResult(johnBMI, markBMI);


// for(var i = 0 ;i<10; i++)
// {
//     console.log(i);
// }

var jhon=['jhon','Smith', 1994, 'designer',false];

for(var i =0;i <jhon.length ;i++ )
{
    console.log(jhon[i]);
}
