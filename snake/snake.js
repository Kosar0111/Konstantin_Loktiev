const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

const field = new Image();
field.src = 'img/field.png';

const foodImg = new Image();
foodImg.src = 'img/ved.png';

let box = 32;  // размер одного квадрата, 
let score = 0;

// распологаем еду
let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

// наша змея
let kobra = [];
kobra[0] = {

    // стартовые координаты змеи
    x: 15 * box,
    y: 10 * box
};

document.addEventListener('keydown', direction);


let dir;

function direction(event) {
    if (event.keyCod == 100 && dir != 'right')
        dir = 'left';
    else if (event.keyCod == 104 && dir != 'down')
        dir = 'up';
    else if (event.keyCod == 102 && dir != 'left')
        dir = 'right';
    else if (event.keyCod == 98 && dir != 'up')
        dir = 'down';
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game)
    }
}

function draw() {
    ctx.drawImage(field, 0, 0);  // рисуем холст
    ctx.drawImage(foodImg, food.x, food.y) // рисуем еду в рандомном месте
    for (let i = 0; i < kobra.length; i++) {
        ctx.fillStyle = i == 0 ? 'green' : 'red';
        ctx.fillRect(kobra[i].x, kobra[i].y, box, box)
    }

    // выводим счет
    ctx.fillStyle = 'white';
    ctx.font = '50px Arial';
    ctx.fillText(score, box * 2.5, box * 1.7)

    let kobraX = kobra[0].x;
    let kobraY = kobra[0].y;

    // ест еду
    if (kobraX == food.x && kobraY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    } else {
        kobra.pop();
    }

    if (kobraX < box || kobraX > box * 17
        || kobraY < 3 * box || kobraY > box * 17)
        clearInterval(game);

    // передвигаем змею
    kobra.pop();

    if (dir == 'left') kobraX -= box;
    if (dir == 'right') kobraX += box;
    if (dir == 'up') kobraY -= box;
    if (dir == 'down') kobraY += box;

    let head = {
        x: kobraX,
        y: kobraY
    };

    eatTail(head, kobra)


    kobra.unshift(head);
}

let game = setInterval(draw, 300);