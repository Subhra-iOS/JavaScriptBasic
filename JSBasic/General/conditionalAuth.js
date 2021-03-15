// conditional login
var email = true;
var facebook = false;
var google = false;

if (email || facebook || google){
    console.log("Login success");
}

var authenticated = false;

// if(authenticated) {
//     console.log("Show sign out button");
// }else {
//     console.log("Show sign in button");
// }

var statusMsg = authenticated ? "Show sign out button" : "Show sign in button";
console.log(statusMsg);