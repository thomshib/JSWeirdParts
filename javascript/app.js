

/*
//functions, objects and this

function a(){
    console.log(this);
    this.newvariable = 'hello';
}

var b = function(){
    console.log(this);
}

a();
console.log(newvariable);
b();

var c = {

    name:'object in c',
    log: function(){
        var self = this;
        self.name = 'update object in c';
        console.log(self);

        var setname = function(newname){
            self.name = newname;
        }
        setname('Updated Again! object in c');
        console.log(self);

    }
}

c.log();
*/


/*
//array

var arr = [
    1,
    false,
    {
        name:'shibu',
        address:'102 madhushree'
    },
    function(name){
        var greetings = 'Hello';
        console.log(greetings + name);
    },
    'hello'
]

console.log(arr);
arr[3](arr[2].name);

*/

/*
//arguments
function greet(firstname,lastname,language){

    //setup default value for language
    language = language || 'en';

    if(arguments.length === 0){
        console.log('Missing Parameters');
        console.log('----------------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('----------------------');
}

greet();
greet('john')
greet('john','doe')
greet('john','doe','es');

*/


/*

//IIFE 

//function statement
function greet(name){
    console.log('Hello ' + name);
}
greet('john');

//function expression
var greetFunc = function(name){
    console.log('Hello ' + name);
}
greetFunc('john');

// immediately invoked function expression IIFE
var greeting =  function(name){
    return 'Hello ' + name;
}('john');

console.log(greeting);


//anonymous function expression that is IIFE
var firstname = 'john';
(function(name){
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(firstname));

//safe code with IIFE
//greeting global variable is not used in IIFE

var greeting = 'Hola;

(function(name){
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}('John'));


*/

//Closures
function greet(whattosay){

    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('Shibu');