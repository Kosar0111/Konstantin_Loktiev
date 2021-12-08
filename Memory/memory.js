const cards = document.querySelectorAll('.memory-card');

let flipCard = false;
let lock = false;
let firstCard, secondCard;

//переворачиваем карты
function flippeCard() {
    if (lock) return;    // проверка нажатия на вторую карту, переворачивание останавлив
    if (this == firstCard) return;

    this.classList.add('flip');
    // состояние переворачивания
    if (!flipCard) {
        flipCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    lock = true;

    check();
}
// проверка совпадения карт
function check() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? dissapearCards() : unflipCard();
}


//  отключаем обработчик событий
function dissapearCards() {
    firstCard.removeEventListener('click', flippeCard);
    secondCard.removeEventListener('click', flippeCard);

    reset();
}

// возвращаем карты в исходное положение
function unflipCard() {

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        reset()
    }, 1500)
}


// нажатие той же карты
function reset() {
    [flipCard, lock] = [false, false];
    [firstCard, secondCard] = [null, null]
}

// перемешиваем карты меняя свойство order
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})()
cards.forEach(card => card.addEventListener('click', flippeCard));
