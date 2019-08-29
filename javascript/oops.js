
/*
//prototype

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john  = {
    firstname: 'John',
    lastname: 'Doe'
}


//don't do this ; this is for demo only
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
    firstname: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName());

//reflection with prototype chain
for(var prop in john){
    console.log(prop + ': ' + john[prop]);
    console.log('-----------------------');
}

//reflection without prototype chain
for(var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

*/

/*
//function prototype

function Person(firstname,lastname){
    //this points to an empty object {}
    console.log(this); 
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked');
}


//new is an operator, which creates an empty object {}
// after the empty object is created, Person function is invoked 
//to set the properties
var john = new Person('john','doe');
console.log(john);


//a different object is created everytime we call new
var jane = new Person('jane', 'doe');
console.log(jane);

*/


/*
//functions objects and prototype

var Person = function(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

//every function object has a property called prototype

Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}

//every new Function object created using new has 
//its __proto__ set to the function prototype

var john = new Person('john', 'doe');
console.log(john);
//the fn call is possible since john object 
//shares its prototype with Person function
console.log(john.getFullName());

var jane = new Person('jane', 'doe');
console.log(jane);

//possible to add more functions to the Person prototype
//after object creations
// all objects created before can invoke the newly added functions
Person.prototype.getFormalFullName = function(){
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());

// as a best practice all properties reside in the function object
// all methods are added to the prototype of the function
// so that all objects created using new function constructor operator can invoke the method

// this improves the memory footprint. If the method is created inside the 
//function, all object created using new function constructor will get a separate copy of the method which will 
// kept in memory. 
// Adding it to the protorype creates a single copy of the method
// in memory and shared across objects using prototype chain

*/


//Object.create

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstname = 'john';
john.lastname = 'doe';
console.log(john);
console.log(john.getFullName());