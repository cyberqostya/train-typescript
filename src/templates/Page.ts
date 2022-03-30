abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected _createHeaderTitle(text: string): HTMLElement {
    const headerTitle: HTMLElement = document.createElement('h1');
    headerTitle.textContent = text;
    return headerTitle;
  }

  render(): HTMLElement {
    return this.container;
  }
}

export default Page;