var users = ["Subhra", "Sam", "Jit", "Roy", "John", "Berry"];
//console.log(users.slice(1, 4));
users.splice(1, 3, "Hello", "Bro");//(args1: start index, args2: deleteObjCount, args3: [] of new items)
console.log(users);
