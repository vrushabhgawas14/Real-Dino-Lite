score = 0;
cross = true;
audiogo = new Audio('boing.mp3');
audio = new Audio('main.mp4');

setTimeout(() => {
    audio.play();
}, 500);

document.onkeydown = function (e) {
    console.log("key code is : ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 900);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox + 250) + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 250) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX);
    if (offsetX < 90 && offsetY < 150) {
        gameOver.innerHTML = "Oops! Game Over, Relod To Play Again";
        obstacle.classList.remove('obstacleani');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

        }, 100);
        // setTimeout(() => {
        //     aniDur = parseFloat(window.getComputedStyle(dino, null).getPropertyValue('animation-duration'));
        //     newDur = aniDur - 0.1;
        //     dino.style.animationDuration = newDur + 's';
        // }, 100);
    }

}, 100);


function updateScore(score) {
    scoreCount.innerHTML = "Your Score : " + score;
}
