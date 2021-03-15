var name = "Subhra";

console.log("Line number 3, ", name);

function sayName() {
   var name = "Mr. Roy";
   console.log("Line number 6, ", name);
   sayNestedName();
   function sayNestedName() {
    var name = "Mr. SR";
    console.log("Line number 9, ", name);
   }
}

sayName();
