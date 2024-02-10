
const btn = document.getElementById("btn")
const textcode = document.getElementById("code")

btn.addEventListener('click' , generateColor)

function generateColor(){
    const chars = '0123456789ABCDEF'
    let value ='#'
    for(let i=1; i<=6; i++){
        var randcolor = Math.random()*chars.length;
        value+= chars[Math.floor(randcolor)];
     
}
document.body.style.background = value;
textcode.innerHTML = value;
}