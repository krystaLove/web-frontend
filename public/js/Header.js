import Component from "./component.js";

export class Header extends Component {
    render() {
        return `
        <header>
            <div class="header__logo-wrapper">
                <img src="img/logo.jpg" alt="Little Endian" />
                <span>Очень крутая школа</span>
            </div>
            <p class="header__about">
                Это страница самой крутой в школы наикрутейшем городе с самым крутым руководством
            </p>
        </header>`;
    }
}