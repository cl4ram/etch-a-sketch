const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const buttonEl = document.querySelector('.shake');
const moveAmount = 10;
const {height, width} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'miter';
ctx.lineCap = 'square';
ctx.lineWidth = 10;

ctx.strokeStyle = '#000'
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke()

function draw(key){
  ctx.beginPath();
  ctx.moveTo(x, y);
    switch (key) {
        case 'ArrowUp':
            if(y > 0){
                y -= moveAmount;
            }
            break;
        case 'ArrowDown':
            if(y < canvas.height){
                y += moveAmount
            }
            break;
        case 'ArrowRight':
            if(x < canvas.width){
                x += moveAmount
            }
            break;
        case 'ArrowLeft':
            if(x > 0){
                x -= moveAmount;
            }
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(event) {
    if (event.key.includes('Arrow') ){
        event.preventDefault()
        draw(key = event.key)
    }
}

function clear() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0 , width, height);
    canvas.addEventListener(
        'animationend',
        function() {
          console.log('Done the shake!');
          canvas.classList.remove('shake');
        },
        { once: true }
      );
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    
      
}

document.addEventListener('keydown', handleKey);
buttonEl.addEventListener('click', clear)