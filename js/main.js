var now = new Date();
var butto = document.getElementById('modal-btn-close');
var backdrop = document.getElementById('backdrop');
var buttoOpen = document.getElementById('open-modal')
var menuCloseButton = document.querySelector(".header_nav-close")

menuCloseButton.addEventListener("click", () => {
    backdrop.classList.add('is-hidden');
})

buttoOpen.addEventListener("click", function(){
    backdrop.classList.remove('is-hidden');
})

var year = now.getFullYear();
var month = (now.getMonth() + 1).toString().padStart(2, '0');
var day = now.getDate().toString().padStart(2, '0');
var hours = now.getHours().toString().padStart(2, '0');
var minutes = now.getMinutes().toString().padStart(2, '0');

var currentDateTime = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;

document.getElementById('reserve-zeit').value = currentDateTime;
document.getElementById('reserve-zeit').min = currentDateTime;
