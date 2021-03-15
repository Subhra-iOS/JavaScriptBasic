//admin: have full access
//subadmin: can creat/delete courses
//testprep: can creat/delete tests
//enduser: can consume the courses

var user = "admin";

switch (user) {
    case "admin":
        console.log("You have full access");
        break;
    case "subadmin":
        console.log("You can creat/delete courses");
        break;
    case "testprep":
        console.log("You can creat/delete tests");
        break;
    case "enduser":
        console.log("You can consume the courses");
        break;
    default:
        console.log("You are a trial user");
        break;
}