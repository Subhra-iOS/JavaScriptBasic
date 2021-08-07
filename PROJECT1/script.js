/*var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");*/

var counter = document.getElementById("counter");
var followers = document.getElementById("followers");

let count = 1;
setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
}, 100)

setTimeout(() => {
    followers.innerHTML = `Followers in Facebook`;
}, 4000)