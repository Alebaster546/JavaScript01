// document.getElementById('');
// document.getElementsByClassName('classname');
// document.getElementsByTagName('br');
// document.querySelector('.menu');
// document.querySelectorAll('i')

var burg = document.getElementById('burger');
burg.onclick = function(){
addMenu();
};

function addMenu(){
    document.querySelector('.mob-menu').classList.toggle('show');
}