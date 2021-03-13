var myStates = ["West Bengal", "Assam",1947,"Delhi", "Uttar Pradesh", "Bihar"];
// for (let index = 0; index < myStates.length; index++) {
//     if(typeof myStates[index] != 'string') continue;
//     console.log(myStates[index]);
// }

// let i = 0;
// while (i< myStates.length) {
//     console.log(myStates[i]);
//     i++;
// }

// do {
//     console.log(myStates[i]);
//     i++; 
// } while (i< myStates.length);

var i = 0;
for(;;){
    if(i < 3) break;
    console.log(i);
    i++;
}

myStates.forEach((state) => {
    console.log(state);
});