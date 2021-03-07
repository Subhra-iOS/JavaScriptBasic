var countries = ["India", "USA", "JAPAN", "Australia"];
var states = ["West Bengal", "Karnataka", "Delhi", "Uttar Pradesh"];

console.log(states[1]);
console.log(states);

var user = ["Subhra", "subhra.roy@e-arc.com", 377, true];
console.log(user);

user.pop()
console.log(user);
user.unshift("New Employee");
console.log(user);
user.shift();
console.log(user);
console.log(user.indexOf("subhra.roy@e-arc.com"));
console.log(user.indexOf("trialUser"));// output -1 i.e element not contains within the arry,
                                       // don't delete it
console.log(Array.from("Subhra"));