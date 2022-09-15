

const demoKey = document.getElementById("1");
console.log(demoKey);

// function keySound(key_id) {
//     playNote = new Audio(`24-piano-notes/key${key_id}.mp3`);
//     playNote.play();
// }
demoKey.addEventListener('click', keySound);

function keySound() {
    playNote = new Audio('24-piano-notes/key1.mp3');
    playNote.play();
}

