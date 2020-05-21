import { Person } from './Person.js';

/**
 * Класс Student
 * @class
 */
export class Student extends Person {

    /**
     * Конструктор класса Student
     * @constructor
     * @param {Object} params [Объект описания]
     */
    constructor(params) {
        super(params);
        this.universityYear = params.universityYear;
    }

    /**
     * Получение класса, в котором обучается Student
     * @returns {string}
     */
    get education() {
        return `${this.universityYear} класс`;
    }

    /**
     * Получение контейнера, в котором хранятся карточки для класса Student
     * @returns {HTMLDivElement}
     */
    getCardHolder() {
        return document.getElementById('student-card-wrapper');
    }

    /**
     * Заполнение карточки информацией базового класса Person и класса Student, с последующим выводом на экран 
     * @public
     */
    displayBadge() {
        super.displayBadge();

        let badgeUniversity = document.getElementById('badge__university');
        badgeUniversity.innerText = this.education;
        badgeUniversity.setAttribute('data-before', 'Учится: ');
    }
}