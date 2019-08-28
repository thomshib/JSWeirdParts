

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
/*
function greet(whattosay){

    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('Shibu');
*/

/*
function buildFunctions(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }

        );
    }

    return arr;

}


var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//how to fix above to print 0,1,2,
function buildFunctionsModified(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j){
                return function(){
                    console.log(j);
                }
            }(i))

        );
    }

    return arr;

}


var fs = buildFunctionsModified();
fs[0]();
fs[1]();
fs[2]();

*/

/*
//function factories using closures

function makeGreeting(language){
    return function(firstname,lastname){
        if(language == "en"){
            console.log('Hello ' +  firstname + ' ' + lastname);
        }
        if(language == "es"){
            console.log('Hola ' +  firstname + ' ' + lastname);
        }
    }
}

var greetEngish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEngish('John' ,'Doe');
greetSpanish('John' ,'Doe');

*/

/*
//closures and callbacks

function sayHiLater(){
    var greeting = 'Hi';
    setTimeout(function(){
        console.log(greeting);
    },3000);
}

sayHiLater();
*/

/*
//call, apply and bind

var person ={
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' +  this.lastname;
        return fullname;
    }
}

var logName = function(lang1,lang2){
    console.log('Logged: ' + this.getFullName());
    console.log('Argument: ' + lang1 + ' ' + lang2)
    console.log('----------------------');
}
//logName(); //will throw an error

var logPersonName = logName.bind(person); //creates a copy of the function
logPersonName('en');

logName.call(person,'en','es');
logName.apply(person,['en','es']);

//function borrowing

var person2 = {
    firstname: 'Jane',
    lastname:' Doe'
}

console.log(person.getFullName.apply(person2));

//function currying
//creates a new copy of the function

function multiply(a,b){
    return a * b;
}

var multiplyByTwo = multiply.bind(this,2); //param a is set to 2
console.log(multiplyByTwo(3));

*/

//functiona; programming

function mapForEach(arr, fn){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        newarr.push( fn(arr[i]));
    };
    return newarr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1,function(item){
    return item * 2;
});

console.log(arr2);

var checkPastLimit = function(limiter, item){
    return item > limiter;
}

var arr3 = mapForEach(arr1,checkPastLimit.bind(this,1));
console.log(arr3);

var checkPastLimitSimplified = function(limiter){
    //presets the limiter
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter);
}

var arr4 = mapForEach(arr1,checkPastLimitSimplified(2));
console.log(arr4);

