import { PageIds } from "../App";

const buttons = [
  { id: PageIds.Main, text: 'Main' },
  { id: PageIds.About, text: 'About' },
  { id: PageIds.Contacts, text: 'Contacts' }
]

class Header {
  protected container: HTMLElement;

  constructor() {
    this.container = document.createElement('header');
    this.container.classList.add('header');
  }

  private _renderPageButtons() {
    const pageButtons = document.createElement('div');
    buttons.forEach(button => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.textContent = button.text;
      buttonHTML.style.margin = '0 10px';
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this._renderPageButtons();
    return this.container;
  }
}

export default Header;