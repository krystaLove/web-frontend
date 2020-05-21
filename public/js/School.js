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
     * @param {HTMLElement} container [Куда присоединять карточки, Если null, то присоединяет к элементу прописанному в каждом классе отдельно]
     */
    mount(container) {
        this.personList.forEach((val) => {
            val.mount(container || val.getCardHolder());
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