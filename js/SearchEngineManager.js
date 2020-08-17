'use strict';

class SearchEngineManager {
    constructor() {
        this._animals = [...document.querySelectorAll('li')].map((currentValue, index, arr) => {
            return currentValue.textContent;
        });
        this._tbSearch = document.querySelector('input');
        this._animalHtmlList = document.querySelector('ul');

        this.initialize();
    }

    initialize() {
        this._tbSearch.addEventListener('input', (e) => {
            this.search(e.target.value);
        })
    }

    search(text) {
        this._animalHtmlList.innerHTML = '';

        if (text) {
            const selectedAnimals = this._animals.filter((value, index) => {
                return value.toLowerCase().includes(text.toLowerCase());
            });

            selectedAnimals.forEach(element => {
                this.appendLi(element);
            });
        } else {
            this._animals.forEach(element => {
                this.appendLi(element);
            });
        }
    }

    appendLi(text) {
        const li = document.createElement('li');
        li.textContent = text;
        this._animalHtmlList.appendChild(li);
    }
}