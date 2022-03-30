import Page from "../templates/Page";

class About extends Page {
  static textObject: { mainTitle: string, text: string } = { 
    mainTitle: 'About',
    text: "Hi there! It's some project on TypeScript. I improve my skills on it and code SPA.",
  }

  constructor(id: string) {
    super(id);
  }

  private _createSomeText(text: string): HTMLElement {
    const someText = document.createElement('div');
    someText.textContent = text;
    return someText;
  }

  render(): HTMLElement {
    const title = this._createHeaderTitle(About.textObject.mainTitle);
    const text = this._createSomeText(About.textObject.text);
    this.container.append(title);
    this.container.append(text);
    return this.container;
  }
}

export default About;