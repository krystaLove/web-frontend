import { Person } from './Person.js';

/**
 * Класс Teacher
 * @class
 */
export class Teacher extends Person {

    /**
     * Конструктор класса Teacher
     * @constructor
     * @param {Object} params [Объект описания]
     */
    constructor(params) {
        super(params);
        this.job = params.job;
        this.subject = params.subject;
    }

    /**
     * Получение должности
     * @returns {string}
     */
    get education() {
        return `${this.job}`;
    }

    /**
     * Получение контейнера, в котором содержатся карточки класса Teacher
     * @returns {HTMLDivElement}
     */
    getCardHolder() {
        return document.getElementById('teacher-card-wrapper');
    }

    /**
     * Заполнение карточки информацией базового класса Person и класса Teacher, с последующим выводом на экран 
     * @public
     */
    displayBadge() {
        super.displayBadge();

        let badgeUniversity = document.getElementById('badge__university');
        badgeUniversity.innerHTML = this.education;
        badgeUniversity.setAttribute('data-before', 'Преподаёт: ');

        let badgeSubject = document.getElementById('badge__subject');
        badgeSubject.innerHTML = this.subject;
        badgeSubject.style.display = 'inline';
    }
}
