import Component from './component.js';
import DomUtils from './DomUtils.js';

/**
 * Класс Badge
 * @class
 */
export class Badge extends Component {

     /**
      * Вёрстка Pop-up карточки
      * @returns {string}
      */
    render(){
        return `
        <div id="badge">
            <div id="badge__button-close"></div>
            <div id="badge__content-wrapper">
                <div id="badge__content-wrapper__info-container">
                    <span id="badge__name"></span>
                    <span id="badge__bday"></span>
                    <span data-before="" id="badge__university"></span>
                    <span id="badge__subject"></span>
                </div>
                <div id="badge__photo-wrapper">
                    <img id="badge__photo">
                </div>
            </div>
        </div>`;
    }

    /**
     * Перегруженный пре-хук после монтирования
     */
    afterMount(){
        document.getElementById('badge__button-close').addEventListener('click', () => {
            this._onCloseButtonClick();
        });
    }

    /**
     * Нажатие на кнопку закрытия
     * @private
     */
    _onCloseButtonClick()
    {
        this.container.style.display = 'none';
        DomUtils.showContent();
    }
}