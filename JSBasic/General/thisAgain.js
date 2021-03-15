console.log(this);

var user = {
    firtsName: "Subhra",
    lastName: "Roy",
    courseCount: 5,
    getCourseCount: function(){
        console.log("Line No 8", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line No 11", this);
        }
        sayHello();
    }
}

user.getCourseCount();
