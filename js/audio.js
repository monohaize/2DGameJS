// Audio management
const jumpSound = new Audio('audio/jump.mp3');
const collectSound = new Audio('audio/collect.mp3');
const backgroundMusic = new Audio('audio/background.mp3');
backgroundMusic.loop = true; // Loop the background music
backgroundMusic.volume = 0.5; // Lower volume

// Play jump sound
function playJumpSound() {
    jumpSound.currentTime = 0; // Reset to start
    jumpSound.play();
}

// Play collect sound
function playCollectSound() {
    collectSound.currentTime = 0;
    collectSound.play();
}

// Toggle background music
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}

// Start music by default
backgroundMusic.play();