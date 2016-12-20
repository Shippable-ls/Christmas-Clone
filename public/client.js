// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

document.addEventListener("DOMContentLoaded", function(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.rect(20,20,150,100);
ctx.stroke();
});
