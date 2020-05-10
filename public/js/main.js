class Student {
    #isOpenedCard = false;

    constructor(params) {
        this.fullName = params.fullName;
        this.university = params.university;
        this.universityYear = params.universityYear;
        this.birthday = params.birthday;
        this.photoUrl = params.photoUrl;
    }

    get birthDayStr() {
        return `${this.birthday.getDate()} ${this._getMonthName()}, ${this._calculateAge()} лет`;
    }

    get education() {
        return `${this.university} ${this.universityYear} курс`;
    }

    static getStudentCardHolder() {
        return document.getElementById('card-wrapper');
    }

    makeCard() {
        let studentCard = document.createElement('div');
        studentCard.className = "member-card";

        let studentImg = document.createElement('img');
        studentImg.setAttribute('src', this.photoUrl);
        studentImg.className = "member-card__photo";

        let studentInfoBlock = document.createElement('div');
        studentInfoBlock.className = "member-card__info";

        let studentName = document.createElement('p');
        studentName.className = "member-card__name";
        studentName.innerText = this.fullName;

        let studentUniversity = document.createElement('p');
        studentUniversity.className = "member-card__organization";
        studentUniversity.innerText = this.education;

        studentCard.appendChild(studentImg);
        studentCard.appendChild(studentInfoBlock);

        studentInfoBlock.appendChild(studentName);
        studentInfoBlock.appendChild(studentUniversity);

        return studentCard;
    }

    openBadge(target) {
        let studentBadge = document.createElement('div');
        studentBadge.className = "badge";

        let badgeCloseButton = document.createElement('div');
        badgeCloseButton.className = "badge__button-close";

        let badgeContentWrapper = document.createElement('div');
        badgeContentWrapper.className = "badge__content-wrapper";

        let badgeInfoContainer = document.createElement('div');
        badgeInfoContainer.className = "badge__content-wrapper__info-container";

        let badgeName = document.createElement('span');
        badgeName.className = "badge__name";
        badgeName.innerText = this.fullName;

        let badgeBirthday = document.createElement('span');
        badgeBirthday.className = "badge__bday";
        badgeBirthday.innerText = this.birthDayStr;

        let badgeUniversity = document.createElement('span');
        badgeUniversity.className = "badge__university";
        badgeUniversity.innerText = this.education;

        let badgePhotoWrapper = document.createElement('div');
        badgePhotoWrapper.className = "badge__photo-wrapper";

        let badgePhoto = document.createElement('img');
        badgePhoto.className = "badge__photo";
        badgePhoto.setAttribute('src', this.photoUrl);

        badgePhotoWrapper.appendChild(badgePhoto);

        badgeInfoContainer.appendChild(badgeName);
        badgeInfoContainer.appendChild(badgeBirthday);
        badgeInfoContainer.appendChild(badgeUniversity);

        badgeContentWrapper.appendChild(badgeInfoContainer);
        badgeContentWrapper.appendChild(badgePhotoWrapper);

        studentBadge.appendChild(badgeCloseButton);
        studentBadge.appendChild(badgeContentWrapper);

        badgeCloseButton.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            this.isOpenedCard = false;
        });

        let [x, y] = [target.getBoundingClientRect().right - 100, target.getBoundingClientRect().top];
        studentBadge.style.left = x + "px";
        studentBadge.style.top = y + "px";
        document.body.appendChild(studentBadge);

        return studentBadge;
    }

    appendToDOM() {
        const studentCard = this.makeCard();
        studentCard.addEventListener('click', (event) => {
            if (!this.isOpenedCard) {
                this.isOpenedCard = true;
                this.openBadge(event.currentTarget);
            }
        });

        Student.getStudentCardHolder().appendChild(studentCard);
    }

    _calculateAge() {
        let diff = Date.now() - this.birthday.getTime();
        let age_diff = new Date(diff);
        return Math.abs(age_diff.getUTCFullYear() - 1970);
    }

    _getMonthName() {
        let mList = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return mList[this.birthday.getMonth()];
    }

}

const studentArr = [
    {
        fullName: 'Журавков Денис',
        university: 'БФУ',
        universityYear: 2,
        birthday: new Date(2000, 7, 25),
        photoUrl: '/img/ava1.jpg'
    },
    {
        fullName: 'Смирнов Владислав',
        university: 'БФУ',
        universityYear: 2,
        birthday: new Date(2000, 1, 2),
        photoUrl: '/img/ava2.jpg'
    },
    {
        fullName: 'Иванов Николай',
        university: 'БФУ',
        universityYear: 2,
        birthday: new Date(1999, 19, 7),
        photoUrl: '/img/ava3.jpg'
    }
];

studentArr.forEach((item) => {
    const student = new Student(item);
    student.appendToDOM();
});