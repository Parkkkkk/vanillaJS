const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./image/${imgNumber +1}.jpg`
    image.classList.add('bgImage');
    body.prepend(image);
}

function genrandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomNumber = genrandom();
    paintImage(randomNumber)
}

init();