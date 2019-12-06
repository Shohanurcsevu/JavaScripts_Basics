// console.log(this);


// calclateAge(1995);



// function calclateAge(year){

//   console.log(2019-year);

//   console.log(this);
// }

var jhon = {

    name: 'john',
    yearofBirth: 1995,
    calcuage: function () {
        console.log(this);
        console.log(2019 - this.yearofBirth);

        //this is  a reguler function

        // function inner() {
        //     console.log(this);
        // }
        // inner();
    }
};

jhon.calcuage();
var mike = {
    name: 'Mike',
    yearofBirth: 1994
};
mike.calcuage = jhon.calcuage;
mike.calcuage();
 