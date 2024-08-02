const textarea = document.getElementById('textarea');
const startRecordBtn = document.getElementById('startRecord');
const stopRecordBtn = document.getElementById('stopRecord');
const playbackBtn = document.getElementById('playback');

let recording = false;
let changes = [];
let playbackInterval = null;

textarea.addEventListener('input', () => {
    if (recording) {
        changes.push({
            text: textarea.value,
            timestamp: Date.now()
        });
    }
});

startRecordBtn.addEventListener('click', () => {
    changes = [];
    recording = true;
    changes.push({
        text: textarea.value,
        timestamp: Date.now()
    });
    startRecordBtn.disabled = true;
    stopRecordBtn.disabled = false;
    playbackBtn.disabled = true;
});

stopRecordBtn.addEventListener('click', () => {
    recording = false;
    stopRecordBtn.disabled = true;
    startRecordBtn.disabled = false;
    playbackBtn.disabled = false;
});

playbackBtn.addEventListener('click', () => {
    if (changes.length > 0) {
        let startTime = changes[0].timestamp;
        textarea.value = changes[0].text;

        let index = 1;
        playbackInterval = setInterval(() => {
            if (index < changes.length) {
                let timeDiff = changes[index].timestamp - startTime;
                textarea.value = changes[index].text;
                startTime = changes[index].timestamp;
                index++;
            } else {
                clearInterval(playbackInterval);
            }
        }, 500); // Playback changes every 500ms, adjust as needed
    }
});
