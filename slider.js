'use stricy';

class sliderCarousel {
    constructor({ main, wrap, position = 0, next, prev }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.options = {
            position
        };

    }

    innit() {
        this.addGloClass();
    }
    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (let item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    addStyle() {
        let style = document.createElement('style');
        style.id = 'sliderCarusel-style';
        style.textContent = `
        .glo-slider {
            overflow: hidden
        }
        .glo-slider__wrap {
            display: flex;
            transirion: transform 0.5s;
            will-change: tranform;
        }
        .glo-slider__item{
            flex: 0 0 25% !important;
            margin: auto 0 !important;
        }
        
        `;
        document.head.appendChild(style);
    }
}