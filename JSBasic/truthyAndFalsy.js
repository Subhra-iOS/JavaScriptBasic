//TODO: Falsy values
// undefined
// null
// 0
// ''
// NaN

var user = null;

if(user){
    console.log("Condition is true");
}

var check = "2"
if(2 == check){ //loosely check
    console.log("Conditional check is true");
}

if("2" === check){ //strict check
    console.log("Conditional strict check is true");
}