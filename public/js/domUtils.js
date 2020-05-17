export class DomUtils {

    /**
    * Прячем контент от нажатий на задний план
    */
    static hideContent() {
        document.getElementById('content-hider').style.display = 'flex';
        document.getElementById('content-wrapper').style.opacity = '20%';
    }

    /**
    * Отображаем контент на передний план
    */
    static showContent() {
        document.getElementById('content-hider').style.display = 'none';
        document.getElementById('content-wrapper').style.opacity = '100%';
    }

    /**
     * Добавление слушателя на нажатие на кнопку закрытия карточки с полной информацией
     */
    static addBadgeCloseEvent() {
        let badge = document.getElementById('badge');
        document.getElementById('badge__button-close').addEventListener('click', () => {
            badge.style.display = 'none';
            this.showContent();
        });
    }
}
