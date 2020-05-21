import { Person } from './Person.js';
import { Student } from './Student.js';
import { Teacher } from './Teacher.js';

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