
const allKeys = document.querySelectorAll('.key');


for (const key of allKeys) {
    key.addEventListener('click', () => {
        playNote = new Audio(`24-piano-notes/key${key.id}.mp3`);
        playNote.play();
    });
}

