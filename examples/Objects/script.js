// //Function Constructor

// var jhon = {
//   name: "Jhon",
//   yearofBirth: 1994,
//   job: "teacher"
// };

// var Person = function(name, yearofBirth, job) {
//   this.name = name;
//   this.yearofBirth = yearofBirth;
//   this.job = job;
//   this.calculateAge = function() {
//     console.log(2019 - this.yearofBirth);
//   };
// };

// Person.prototype.calculateAge = function()
// {
//     console.log(2019- this.yearofBirth);
// }
// var jhon = new Person("Jhon", 1996, "teacher");
// var mark= new Person('Mark', 1995,'Designer');
// jhon.calculateAge();
// mark.calculateAge();
// var v = [2,3,4];
// console.log(v);
// var x = v.reverse();
// console.log(x);

// var personProto = {
//   calculateAge: function(){
//     console.log(2019 - this.yearofBirth);
//   }
// };

// var years = [1990,1995,1937,2005,2019];

// function arrayCalculations(arrayAsParameter,functinAsParameter)
// {
//    var arrayResult = [];

//    for(var i =0;i<arrayAsParameter.length; i++)
//    {
//     arrayResult.push(functinAsParameter(arrayAsParameter[i]));
//    }

//    return arrayResult;

// }

// function calculateAge(year)
// {
//   return 2019-year;
// }

// var ages = arrayCalculations(years,calculateAge);

// console.log(ages);

// function showArrray(el)
// {
//   console.log(el);
// }

// function sumArray(el)
// {

//    return el+3;
// }
// var z=arrayCalculations(years,sumArray);
// console.log(z);

/*Function Returns Function */
// function interViewQuestion(job) {
//   switch (job) {
//     case "teacher":
//       return function(name) {
//         console.log("Hello" +" "+ name + " , what subject do you teach about?");
//       };
//       break;
//     case "designer":
//       return function(name) {
//         console.log("Hello" +" "+ name + " , what do you know about UX Design?");
//       };
//       break;
//     default:
//       return function(name) {
//         console.log("Hello" +" " +name + " , what do you do for your live?");
//       };

//   }
// }

// var teacherQuestion = interViewQuestion('teacher');
// teacherQuestion('Atique');
// teacherQuestion('Dave');

// interViewQuestion('designer')('Jake');

//clousers_in_JavaScript

function retirementAgeByCountry(retiremntAge) {
  return function(yearOfBirth) {
    var a = ' years left until retirement '
    var presntAge = 2019 - yearOfBirth;
    console.log(retiremntAge - presntAge + a);
    
  };
}

var retirementtUS = retirementAgeByCountry(61);
var retirementtBD = retirementAgeByCountry(65);

retirementtUS(1994);
retirementtBD(1994);