import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main";
import Page from "./templates/Page";
import Header from "./components/Header";

export const enum PageIds {
  Main = 'main',
  About = 'about',
  Contacts = 'contacts',
}

class App {
  private static container: HTMLElement = document.body;
  private header: Header;
  static currentPageId: string = 'main';

  static renderNewPage(pageId: string) {
    const currentPageHTML = document.querySelector(`#${App.currentPageId}`);
    if(currentPageHTML) currentPageHTML.remove();
    let page: Page | null = null;

    if (pageId === PageIds.Main) {
      page = new Main(pageId);
    } else if (pageId === PageIds.About) {
      page = new About(pageId);
    } else if (pageId === PageIds.Contacts) {
      page = new Contacts(pageId);
    }

    if(page) {
      App.currentPageId = pageId;
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  private _enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.header = new Header();
  }

  run() {
    this._enableRouteChange();
    App.container.append(this.header.render());
    App.renderNewPage(PageIds.Main);
  }
}

export default App;