//DOM
const box = document.querySelector('#box');
const iColor = document.querySelector('.iColor');
const tColor = document.querySelector('#tColor');
const colorVal = document.querySelector('#colorVal');
const btnCopy = document.querySelector('.btnCopy');
const cssCode = document.querySelector('#cssCode');
const url = document.querySelector('#url');
const size = document.querySelector('#size');
const repeat = document.querySelector('#repeat');
const position = document.querySelector('#position');

//
colorVal.innerHTML = iColor.value;
box.style.backgroundColor = iColor.value;
box.style.backgroundImage = `url(${url.value})`;
box.style.backgroundSize = `${size.value}`;
box.style.backgroundPosition = `${position.value}`;
box.style.backgroundRepeat = `${repeat.value}`;

tColor.value = iColor.value;
colorVal.innerHTML = `
<br>
background-color: ${iColor.value};
<br>
background-image: url(${url.value});
<br>
background-position: ${position.value};
<br>
background-size: ${size.value};
<br>
background-repeat: ${repeat.value};
<br>
`;

document.onchange = () =>{
    box.style.backgroundImage = `url(${url.value})`;
    box.style.backgroundSize = `${size.value}`;
    box.style.backgroundPosition = `${position.value}`;
    box.style.backgroundRepeat = `${repeat.value}`;
    btnCopy.innerHTML = 'COPY';
    colorVal.innerHTML = `
    <br>
    background-color: ${iColor.value};
    <br>
    background-image: url(${url.value});
    <br>
    background-position: ${position.value};
    <br>
    background-size: ${size.value};
    <br>
    background-repeat: ${repeat.value};
    <br>
    `;
    
}




iColor.onchange = function(){
    box.style.backgroundColor = iColor.value;
    tColor.value = iColor.value;
    
   
}

tColor.onchange = function(){
    iColor.value = tColor.value;
    box.style.backgroundColor = iColor.value;
    
}

btnCopy.onclick = function(){
    let text = `
    background-color: ${iColor.value};
    background-image: url(${url.value});
    background-position: ${position.value};
    background-size: ${size.value};
    background-repeat: ${repeat.value};
    `;
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



