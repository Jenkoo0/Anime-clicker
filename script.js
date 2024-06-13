
let points = 0;
let pointsPerClick = 1;

document.getElementById('clickButton').addEventListener('click', () => {
    points += pointsPerClick;
    document.getElementById('points').textContent = points;
});

document.getElementById('upgradeButton').addEventListener('click', () => {
    if (points >= 10) {
        points -= 10;
        pointsPerClick += 1;
        document.getElementById('points').textContent = points;
    } else {
        alert('Not enough power to buy a boost!');
    }
});
