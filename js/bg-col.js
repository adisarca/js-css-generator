//DOM
const box = document.querySelector('#box');
const iColor = document.querySelector('.iColor');
const iText = document.querySelector('.iText');
const colorVal = document.querySelector('#colorVal');
const btnCopy = document.querySelector('.btnCopy');
const cssCode = document.querySelector('#cssCode');

//
colorVal.innerHTML = iColor.value;
box.style.backgroundColor = iColor.value;
iText.value = iColor.value;



iColor.onchange = function(){
    box.style.backgroundColor = iColor.value;
    iText.value = iColor.value;
    colorVal.innerHTML = iColor.value;
    btnCopy.innerHTML = 'COPY';
}

iText.onchange = function(){
    iColor.value = iText.value;
    box.style.backgroundColor = iColor.value;
    btnCopy.innerHTML = 'COPY';
    
}

btnCopy.onclick = function(){
    let text = ` background-color: ${iColor.value};`;
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

