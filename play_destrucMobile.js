// ? Destructuring object and arrrays
// Sept 7 2024

const person ={
    name: 'John',
    age:25,
    hobbies:['reading','cooking'],
        greet: function(){
            console.log('Hello my name is'+ this.name+ 'and I am'+ this.
            age + 'years old.');
        }
};
// When to use destructring?
// Destructing is useful when you only need a specific property of an object.
// regular passing of object
// even though we are passing the whole object, we are only using the name property
// const printName = (personData) => {
// console.log(personData.name)
//}

const printName = (personData) => {
    console.log(personData.name);

}

printName(person);

//if we are only interested in the name property of the object, we can use destructuring.
//destructuring the object
//const printName = ({name}) => {
    // console.log(name):
    //}

// we pass the object as an argument to the function
printName(person);

const {name, age} = person;
console.log(name, age);

// destructing arrays
const hobbies = ['reading', 'cooking'];       
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


/*reminders when using destructing
-The property name must match the object property name.
-The property name must be enclosed in curly braces.
-The property name must be followed by a colon.
*/

//Instructions
//Record the following code snippets.

//Play with destructing objects and arrays.