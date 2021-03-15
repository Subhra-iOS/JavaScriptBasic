var user = {
    firstName: "Subhra",
    lastName: "Roy",
    role: "Admin",
    signInCount: 10,
    facebookSignedIn: true,
    courseList: [],
    buyCourses: function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} have access to total ${this.courseList.length} courses`;
    },
    getAllInfo: function(){
        return `${this.firstName} ${this.lastName},who is ${this.role} have signed in ${this.signInCount} times,
        login via facebook is ${this.facebookSignedIn} enrolled total ${this.courseList.length} courses.`
    }
};

console.log(user.firstName);
user.signInCount = 20;
console.log(user.signInCount);
console.table(user);
user.buyCourses("Native Script Course");
user.buyCourses("iOS Course");
console.log(user.getCourseCount());
console.log(user.getAllInfo());
