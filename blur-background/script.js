const bgImage = document.querySelector('.bg');
const blurNum = document.querySelector('.blur-num');

let load = 0;

const startBlurring = setInterval(blurring, 30);

function blurring(){
    load++
    blurNum.innerHTML = `${load}%`;
    
    if (load >99){
        clearInterval(startBlurring);
    }
    blurNum.style.opacity = scale(load, 0,100, 1, 0);
    bgImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

   
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
