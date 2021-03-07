//admin: have full access
//subadmin: can creat/delete courses
//testprep: can creat/delete tests
//user: can consume the courses
//trialUser: user is a trial user 


function sayHello(name) {
    console.log("Hello there, Subhra");
    console.log(`Hello there, ${name}, how are you?`);
}

sayHello("Roy");

function greet() {
    return "Hello in India";
}

var greetings = greet();
console.log(greetings);

// function getUserRole(name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is an admin, have full access`;
//             break;
//         case "subadmin":
//             return `${name} is a sub-admin, can creat/delete courses`;
//             break;
//         case "testprep":
//             return `${name} is a testprep, can creat/delete tests`;
//             break;
//         case "user":
//             return `${name} is a user, can consume the courses`;
//             break;
//         default:
//             return `${name} is a trial user`;
//             break;
//     }
// }

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is an admin, have full access`;
            break;
        case "subadmin":
            return `${name} is a sub-admin, can creat/delete courses`;
            break;
        case "testprep":
            return `${name} is a testprep, can creat/delete tests`;
            break;
        case "user":
            return `${name} is a user, can consume the courses`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

var getRole = getUserRole("subhra", "testprep");
console.log(getRole);

//Code Hoisting in JavaScript

//payBill("20") //code hoisting: executional context => variales declarations 
                //are scanned and made undefined.

var payBill = function (amount) {
    var bill = parseFloat(amount)
    console.log(bill + 5.00);
}
payBill("20")

console.log(name); //Global Context
var name = "Subhra"; //Global Context

function sayName(){
    var name = "Mr. Roy";
    console.log(name);
}

sayName() // Executional Context
console.log(name); //Global Context
