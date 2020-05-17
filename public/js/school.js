/**
 * Компоновщик Person
 * @class
 */
export class School {
    personList = [];

    /**
     * Добавление объекта в список
     * @public
     * @param {Object} person [Объект описания для объекта]
     */
    add(person) {
        this.personList.push(person);
    }

    /**
     * Присоединение всех объектов, хранящихся в списке к DOM-дереву
     */
    appendToDom() {
        this.personList.forEach((val) => {
            val.appendToDOM();
        });
    }

    /**
     * Фильтр оп имени
     * @param {string} name
     * @returns {Array} [Фильтр списка Персон по имени] 
     */
    filterName(name) {
        return this.personList.filter(val => val.fullName === name);
    }
}