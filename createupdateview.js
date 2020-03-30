export class CreateUpdateView {
  constructor(presenter, index, person) {
    this.presenter = presenter;
    this.app = document.getElementById('app');

    // HTML
    const html = `
        <h2>CreateUpdateView</h2>
        <fieldset>
          <legend>Name</legend>
            <input id="inputName" type="text"></input>
        </fieldset>
        <fieldset>
          <legend>Birthday</legend>
            <input id="inputBirthday" type="date"></input>
        </fieldset>
        <fieldset>
          <legend>Freund</legend>
            <input type="checkbox" id="friend"/>
        </fieldset>
        <button id="buttonSave">Save</button>
        <button id="buttonCancel">Cancel</button>
        `;
    this.app.innerHTML = html;

    // Controls
    this.inputName = document.getElementById('inputName');
    this.inputBirthday = document.getElementById('inputBirthday');
    this.inputFriend = document.getElementById('friend');

    // Display values
    this.inputName.value = person.name;
    this.inputBirthday.value = person.birthday;

    if(person.isFriend == true){
      this.inputFriend.checked = true;
    }

    // Events
    this._registerEvents(index);
  }

  _registerEvents(index) {
    const buttonSave = document.getElementById('buttonSave');
    buttonSave.addEventListener('click', () => {
      this.presenter.buttonSaveClicked(index);
    });

    const buttonCancel = document.getElementById('buttonCancel');
    buttonCancel.addEventListener('click', () => {
      this.presenter.buttonCancelClicked();
    });
  }

  getName() {
    return this.inputName.value;
  }

  getBirthday() {
    return this.inputBirthday.value;
  }

  getIsFriend(){
    return this.inputFriend.checked;
  }
}
