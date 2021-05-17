/////////////////////// ************************  end.html script**************

let user_name = sessionStorage.getItem("name");
let point = sessionStorage.getItem("points");

document.querySelector(".name").innerHTML = "      " + user_name;
document.querySelector(".point").innerHTML = point;

// document.getElementById("qname").innerHTML = "  " + user_name;


let time = sessionStorage.getItem("totaltime");
document.querySelector(".tTime").innerHTML = "Time taken - " + time;


///*************change icon*********** */

var p = document.querySelector(".picon");
var f = document.querySelector(".ficon");
var v = document.querySelector(".victory");
if(point == 0){
     p.style.display = "none";
     v.innerHTML = "Sorry! ";
}
else{
    v.innerHTML = "Welldone! ";
    f.style.display = "none";
}