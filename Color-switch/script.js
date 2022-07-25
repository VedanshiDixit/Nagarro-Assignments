const black = document.getElementById("black");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const text = document.querySelector(".text");
const textarea = document.querySelector(".textarea");


black.addEventListener('click', ()=>{
    text.style.backgroundColor = "#000000";
    textarea.style.borderColor = "#ffffff";
    textarea.style.color = "#ffffff"
});
blue.addEventListener('click', ()=>{
    text.style.backgroundColor = "#2125e4";
    textarea.style.borderColor = "#ffffff";
    textarea.style.color = "#ffffff"
});
green.addEventListener('click', ()=>{
    text.style.backgroundColor = "#0f9e1d";
    textarea.style.borderColor = "#000000";
    textarea.style.color = "#000000";
});
yellow.addEventListener('click', ()=>{
    text.style.backgroundColor = "#fff428";
    textarea.style.borderColor = "#000000";
    textarea.style.color = "#000000";
});