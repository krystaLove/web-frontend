import {Person, Student, Teacher} from 'personLib.js';

/**
 * Фабрика Person
 * @class
 */
export class PersonFactory {
    /**
     * Фабричный метод
     * @param {params} params [объект с описанием того, что нужно создать]
     * @returns {Object} [унаследованный от Person объект]
     */
    create(params) {
        let person = null;
        switch (params.type) {
            case 'student':{
                person = new createStudent(params);
                break;
            }
            case 'teacher':{
                person = new createTeacher(params);
                break;
            }   
            default:{
                person = new createPerson(params);
                break;
            }
        }
        return person;
    }

    createPerson(params){
        return new Person(params);
    }

    createStudent(params){
        return new Student(params);
    }

    createTeacher(params){
        return new Teacher(params);
    }
    
}