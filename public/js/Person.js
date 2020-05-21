import { Component } from './component.js';
import { DomUtils } from './domUtils.js';

/** Базовый класс Person
 * @class
 */
export class Person extends Component {

    /**
     * Конструктор базового класса Person
     * @constructor
     * @param {Object} params [fullName - полное имя, birthday - Дата рождения, photoUrl - ссылка на фото, type - конкретный {Student | Teacher}] 
     */
    constructor(params) {
        super();
        this.fullName = params.fullName;
        this.birthday = params.birthday;
        this.photoUrl = params.photoUrl;
        this.type = params.type;
    }

    /**
     * Получение дня рождения и возраста в виде строки
     * @returns {string}
     */
    get birthDayStr() {
        return `${this.birthday.getDate()} ${this._getMonthName()}, ${this._calculateAge()} лет`;
    }

    /**
     * Вёрстка карточки Person
     * @returns {string}
     */
    render() {
        return `
        <div class="member-card">
            <img src="${this.photoUrl || ''}" class="member-card__photo">
            <div class="member-card__info">
                <p class="member-card__name">${this.fullName || ''}</p>
                <div class=".member-card__organization">${this.education || ' '}</div>
            </div>
        </div> 
        `;
    }

    /**
     * Перегруженный пре-хук после монтирования
     */
    afterMount() {
        this.container.addEventListener('click', () => {
            this._onClick();
        });
    }

    /**
     * Нажатие по карточке
     * @private
     */
    _onClick() {
        DomUtils.hideContent();
        this.displayBadge();
    }

    /**
     * Заполнение карточки информацией класса Person и последующий вывод на экран
     * @public
     */
    displayBadge() {
        let badge = document.getElementById('badge');
        badge.style.display = "flex";

        let badgeName = document.getElementById('badge__name');
        badgeName.innerText = this.fullName;

        let badgeBirthday = document.getElementById('badge__bday');
        badgeBirthday.innerText = this.birthDayStr;

        let badgePhoto = document.getElementById('badge__photo');
        badgePhoto.setAttribute('src', this.photoUrl);

        let badgeSubject = document.getElementById('badge__subject');
        badgeSubject.style.display = 'none';

        return badge;
    }

    /**
     * Вычисление возраста
     * @private
     * @returns {number}
     */
    _calculateAge() {
        let diff = Date.now() - this.birthday.getTime();
        let age_diff = new Date(diff);
        return Math.abs(age_diff.getUTCFullYear() - 1970);
    }

    /**
     * Получение названия месяца
     * @private
     * @returns {string}
     */
    _getMonthName() {
        let mList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return mList[this.birthday.getMonth()];
    }
}