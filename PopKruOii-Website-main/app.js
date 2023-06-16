
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");

const Pop = "./img/pop.jpg";
const Norm = "./img/oiinom.png";

const sound = new Audio("./sound/speedupPOP.mp3");
const sound2 = new Audio("./sound/speedupAowss.mp3");

btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

function openMouth() {
    popcat.src = Pop;
    sound.play();
}

function closeMouth() {
    popcat.src = Norm;
    sound2.play();
}

window.addEventListener("keyup", function(e) {
    e.key=" "
    closeMouth();
})

window.addEventListener("keydown", function(e) {
    e.key=" "
    openMouth();
})
