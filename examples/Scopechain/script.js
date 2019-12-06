// var a='hello'

// first();

// function first()
// {
//     var b='My Name is'
//     second();

//     function second()
//     {
//         var c='Shohan'
//         //here variable c is accesible from second funcion Scope
//         //but not b
//         //then it goes up and find it from first fucntion Scope
//         //and last the varible a is  accesible from the global Scope
//         console.log(a + " " +b+" " +c);
//     }
// }
// var a = 'Hello';
// first();

// function first() {
//     var b = 'My Name ';
//     second();


//     function second() {
//         var c = 'is';
//         third();
//     }
// }

// function third() {
    
//     var d = 'Shohan'
//     console.log(a + " " + " " + d);
// }

//here variable a is in Global Scope this why third
//function can get the access 
//d is defined in the third function in itself this ehy d 
//is also accesible 
//