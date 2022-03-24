var classContent = document.querySelector('.class_query');
var IdContent1 = document.querySelector('#ID_query');
var IdContent2 = document.getElementById('id');

var button1 = document.querySelector('.class_button');
var button2 = document.querySelector('.ID_button');
var button3 = document.querySelector('.ID_button2');

button1.addEventListener("click", function(){
    classContent.textContent="Works fine";
})

button2.addEventListener("click", function(){
    IdContent1.textContent="Works fine";
})

button3.addEventListener("click", function(){
    IdContent2.textContent="Works fine";
})