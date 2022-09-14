const demoKey = document.getElementById("1");
console.log(demoKey);

function keySound() {
    playNote = new Audio('24-piano-notes/key01.mp3');
    playNote.play();
}

demoKey.addEventListener('click', keySound);
