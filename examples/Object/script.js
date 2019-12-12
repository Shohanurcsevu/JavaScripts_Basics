// var personData = {
//     calculateAge: function (){
//         console.log(2019-this.yearOfBirth);
//     }
// };

// var jhon = Object.create(personData);
// jhon.name = 'jhon';
// jhon.yearOfBirth = 1994;
// jhon.job = 'Designer';

// var jane = Object.create(personData,{

//     name: { value: 'Jane'},
//     yearOfBirth: {value : 1995},
//     job : {value: 'deisgne'}

// });

var age = 24;
var obj = {
    name : 'Shohan',
    city: 'Dhaka'

};

function chnage(a,b)
{
    a = 25;
    b = 'Pabna'
};

chnage(age,obj.city);

console.log(age);
console.log(obj.city);