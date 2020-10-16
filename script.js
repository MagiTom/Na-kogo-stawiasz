const image = [...document.getElementsByTagName('img')];
const goalR = document.querySelector('.goals1');
const goalG = document.querySelector('.goals2');
const btn = document.getElementById('btn');
const result = document.querySelector('.result');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');
const draws = document.querySelector('.draws');
const allPoints = document.querySelector('.all-points');
const wins2 = document.querySelector('.wins2');
const losses2 = document.querySelector('.losses2');
const draws2 = document.querySelector('.draws2');
const allPoints2 = document.querySelector('.all-points2');

const scoreBoard1 = {
    win1: 0,
    loss1: 0,
    draw1: 0,
};

const scoreBoard2 = {
    win2: 0,
    loss2: 0,
    draw2: 0,
};

const startGame = () => {
    checkResult();
    checkPoints();
}

image.forEach(img => img.addEventListener('click', () => {
    image.forEach(img => img.style.boxShadow = '');
    img.style.boxShadow = '0 0 0 4px yellow'
}));

const checkResult = () => {
    const points1 = Math.floor(Math.random() * 10 + 1);
    const points2 = Math.floor(Math.random() * 10 + 1);
    goalR.textContent = points1;
    goalG.textContent = points2;

    if (points1 > points2) {
        result.textContent = 'Ruch Chorzów wygrał!';
        wins.textContent = ++scoreBoard1.win1;
        losses2.textContent = ++scoreBoard2.loss2;

    } else if (points1 < points2) {
        result.textContent = 'Górnik Zabrze wygrał!';
        wins2.textContent = ++scoreBoard2.win2;
        losses.textContent = ++scoreBoard1.loss1;

    } else {
        result.textContent = 'Remis!';
        draws.textContent = ++scoreBoard1.draw1;
        draws2.textContent = ++scoreBoard2.draw2;

    }
};

const checkPoints = () => {
    allPoints.textContent = (scoreBoard1.win1 * 3) + (scoreBoard1.draw1 * 1);
    allPoints2.textContent = (scoreBoard2.win2 * 3) + (scoreBoard2.draw2 * 1);
}

btn.addEventListener('click', startGame);