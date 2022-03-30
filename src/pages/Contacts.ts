import Page from "../templates/Page";

class Contacts extends Page {
  static textObject: { mainTitle: string, phone: number } = { 
    mainTitle: 'Contacts',
    phone: 88005553535,
  }

  constructor(id: string) {
    super(id);
  }

  private _createContacts(contact: number): HTMLElement {
    const contacts = document.createElement('div');
    contacts.textContent = contact.toString();
    return contacts;
  }

  render(): HTMLElement {
    const title = this._createHeaderTitle(Contacts.textObject.mainTitle);
    const contact = this._createContacts(Contacts.textObject.phone);
    this.container.append(title);
    this.container.append(contact);
    return this.container;
  }
}

export default Contacts;