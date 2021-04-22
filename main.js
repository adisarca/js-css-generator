//DOM
const bgColor = document.querySelector('#bgColor');
const bgGrad = document.querySelector('#bgGrad');
const bgImg = document.querySelector('#bgImg');

bgColor.onclick = function(){
    window.location.href = "background-color.html"
}
bgGrad.onclick = function(){
    window.location.href = "background-gradient.html"
}
bgImg.onclick = function(){
    window.location.href = "background-image.html"
}