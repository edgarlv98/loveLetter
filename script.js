function showLetter () {
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.classList.toggle('flap');

    const heart = document.getElementById('heart');
    heart.classList.toggle('heartMoved');
};