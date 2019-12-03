var a='hello'

first();

function first()
{
    var b='My Name is'
    second();

    function second()
    {
        var c='Shohan'
        //here variable c is accesible from second funcion Scope
        //but not b
        //then it goes up and find it from first fucntion Scope
        //and last the varible a is  accesible from the global Scope
        console.log(a + " " +b+" " +c);
    }
}