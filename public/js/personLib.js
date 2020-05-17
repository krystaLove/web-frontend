import { DomUtils } from './domUtils.js'
/** Базовый класс Person
 * @class
 */
export class Person {

    /**
     * Конструктор базового класса Person
     * @param {Object} params [fullName - полное имя, birthday - Дата рождения, photoUrl - ссылка на фото, type - конкретный {Student | Teacher}] 
     */
    constructor(params) {
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
     * Создание карточки с заполнением её информацией класса Person
     * @public
     * @returns {HTMLDivElement}
     */
    makeCard() {
        let personCard = document.createElement('div');
        personCard.className = "member-card";

        let pensonImg = document.createElement('img');
        pensonImg.setAttribute('src', this.photoUrl);
        pensonImg.className = "member-card__photo";

        let personName = document.createElement('p');
        personName.className = "member-card__name";
        personName.innerText = this.fullName;

        let personInfoBlock = document.createElement('div');
        personInfoBlock.className = "member-card__info";

        personCard.appendChild(pensonImg);
        personCard.appendChild(personInfoBlock);

        personInfoBlock.appendChild(personName);

        return personCard;
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

/**
 * Класс Student
 * @class
 */
export class Student extends Person {

    /**
     * Конструктор класса Student
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
    static getCardHolder() {
        return document.getElementById('student-card-wrapper');
    }

    /**
     * Создание карточки с заполнинем информацией базового класса и класса Student
     * @public
     * @returns {HTMLDivElement}
     */
    makeCard() {
        let studentCard = super.makeCard();

        let studentInfoBlock = studentCard.getElementsByClassName("member-card__info")[0];

        let studentUniversity = document.createElement('div');
        studentUniversity.className = ".member-card__organization";
        studentUniversity.innerHTML = this.education;

        studentInfoBlock.appendChild(studentUniversity);

        return studentCard;
    }

    /**
     * Присоединение карточки к DOM дереву
     * @public
     */
    appendToDOM() {
        let studentCard = this.makeCard();
        studentCard.addEventListener('click', () => {
            this.displayBadge();
            DomUtils.hideContent();
        });

        Student.getCardHolder().appendChild(studentCard);
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
     * Создание карточки с заполнинем информацией базового класса и класса Teacher
     * @public
     * @returns {HTMLDivElement}
     */
    makeCard() {
        let teacherCard = super.makeCard();

        let teacherInfoBlock = teacherCard.getElementsByClassName("member-card__info")[0];

        let teacherOrganization = document.createElement('div');
        teacherOrganization.className = ".member-card__organization";
        teacherOrganization.innerHTML = this.education;

        teacherInfoBlock.appendChild(teacherOrganization);

        teacherCard.style.borderRadius = '20px';

        return teacherCard;
    }

    /**
     * Получение контейнера, в котором содержатся карточки класса Teacher
     * @returns {HTMLDivElement}
     */
    static getCardHolder() {
        return document.getElementById('teacher-card-wrapper');
    }

    /**
     * Присоединение карточки класса Student к DOM-дереву
     * @public
     */
    appendToDOM() {
        let teacherCard = this.makeCard();
        teacherCard.addEventListener('click', () => {
            this.displayBadge();
            DomUtils.hideContent();
        });

        Teacher.getCardHolder().appendChild(teacherCard);
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

/**
 * Фабрика Person
 * @class
 */
export class PersonFactory {

    createPerson(params) {
        return new Person(params);
    }

    createStudent(params) {
        return new Student(params);
    }

    createTeacher(params) {
        return new Teacher(params);
    }

    /**
     * Фабричный метод
     * @param {params} params [объект с описанием того, что нужно создать]
     * @returns {Object} [унаследованный от Person объект]
     */
    create(params) {
        let person = null;
        switch (params.type) {
            case 'student': {
                person = this.createStudent(params);
                break;
            }
            case 'teacher': {
                person = this.createTeacher(params);
                break;
            }
            default: {
                person = this.createPerson(params);
                break;
            }
        }
        return person;
    }
}