export class Component {
   'use strict';

   constructor(options) {
      this.options = options;
      this.state = {};
      this.container = undefined;
   }

   // view компонента, обязательно должен содержать контейнер!!!
   render() {
      return `<div></div>`;
   }

   /**
    * помещает верстку компонента в dom
    * @param {DOMElement} container контейнер в котором строиться верстка, куда поместить
    * @param {String} position insertAdjacentElement позиция куда помесить, до, в, вконец, после
    */
   mount(container, position) {
      // прехук
      this.beforeMount();

      // создадим компонент
      const newComponent = document.createElement('div');

      // помесить верстку
      newComponent.innerHTML = this.render(this.options);

      this.container = newComponent.firstElementChild;

      container.insertAdjacentElement(position || 'beforeend', newComponent.firstElementChild);

      newComponent.remove();

      this.afterMount();
   }


   /**
    * вызываеться при необходимости обновить компонент в верстке
    */
   update() { }

   /**
    * Уничтожения компонента из dom и вообще
    */
   unmount() {
      this.beforeUnmount();

      this.removeContainer();

      this.afterUnmount();
   }

   removeContainer() {
      if (this.container) {
         this.container.remove();
         this.container = undefined;
      }
   }

   // прехук до монтирования
   beforeMount() {}

   // прехук после монтирования
   afterMount() {}

   // прехук до размонтирования
   beforeUnmount() {}

   // прехук после размонтирования
   afterUnmount() {}
}

export default Component;
