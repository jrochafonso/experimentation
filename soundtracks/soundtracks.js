// config keys:

const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const BLACK_KEYS = ['2', '3', '5', '6', '7', '9', '0'];

// get all keys as elements:

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// loop over them:

keys.forEach(key => { // <- for each key, we want to run this function:
    key.addEventListener('click', () => playNote(key)) // <- whenever we click a key, we run a function called playNote (with the key)
})

//### ADDRESSING KEYS CONFIG:

document.addEventListener('keydown', e => { // <- on event 'keydown' fires:
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note); // <- dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes ( data-* ) on elements
    noteAudio.currentTime = 0; // <- to make the audio play from the start, each time a key is clicked on;
    noteAudio.play();
    key.classList.add('pressed');
    noteAudio.addEventListener('ended', () => { // <- 'ended' meaning as soon as the event ends (audio finishes playing):
        key.classList.remove('pressed');             // <- classList.remove to remove the 'pressed' class (removing the color);
    })
}

