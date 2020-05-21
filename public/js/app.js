import { PersonFactory } from './PersonLib.js';
import { School } from './School.js';
import { Header } from './Header.js';
import { Badge } from './Badge.js';

const contentWrapper = document.getElementById('content-wrapper');

const header = new Header();
header.mount(contentWrapper, 'afterbegin');

const badge = new Badge();
badge.mount(document.body);

const factory = new PersonFactory();

let school = new School();

const personArr = [
    {
        fullName: 'Крутой Денис',
        universityYear: 7,
        birthday: new Date(2000, 7, 25),
        photoUrl: '/img/ava02.png',
        type: 'student'
    },
    {
        fullName: 'Крутой Влад',
        universityYear: 10,
        birthday: new Date(2000, 1, 2),
        photoUrl: '/img/ava03.png',
        type: 'student'
    },
    {
        fullName: 'Крутой Николай',
        universityYear: 11,
        birthday: new Date(1999, 19, 7),
        photoUrl: '/img/ava04.jpg',
        type: 'student'
    },
    {
        fullName: 'Николай Зубец',
        job: 'Менеджер',
        subject: 'Математика',
        birthday: new Date(1982, 19, 7),
        photoUrl: '/img/ava01.png',
        type: 'teacher'
    }
];

personArr.forEach((item) => {
    school.add(factory.create(item));
})

school.mount();
