//DOM
const box = document.querySelector('#box');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const pColor1 = document.querySelector('#pColor1');
const pColor2 = document.querySelector('#pColor2');
const tColor1 = document.querySelector('#tColor1');
const tColor2 = document.querySelector('#tColor2');
const angle = document.querySelector('#angle');
const colorVal = document.querySelector('#colorVal');
const btnCopy = document.querySelector('.btnCopy');
//

colorVal.innerHTML = `background-image: linear-gradient(${angle.value}deg, ${color1.value} ${pColor1.value}%, ${color2.value} ${pColor2.value}%);`
tColor1.value = color1.value;
tColor2.value = color2.value;
box.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color1.value} ${pColor1.value}%, ${color2.value} ${pColor2.value}%)`

tColor1.onchange = () =>{
    color1.value = tColor1.value;
}
tColor2.onchange = () =>{
    color2.value = tColor2.value;
}

document.onchange = () =>{
    tColor1.value = color1.value;
    tColor2.value = color2.value;
    colorVal.innerHTML = `background-image: linear-gradient(${angle.value}deg, ${color1.value} ${pColor1.value}%, ${color2.value} ${pColor2.value}%);`
    box.style.backgroundImage = `linear-gradient(${angle.value}deg, ${color1.value} ${pColor1.value}%, ${color2.value} ${pColor2.value}%)`
    btnCopy.innerHTML = 'COPY';
    
}





btnCopy.onclick = function(){
    let text = colorVal.innerHTML;
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    btnCopy.innerHTML = 'COPIED';
}







