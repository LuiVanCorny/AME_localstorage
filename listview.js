export class ListView {
  constructor(presenter, personList, friendsCounter) {
    this.presenter = presenter;

    // ---- HTML ----
    let htmlTable = '<tr><th>Name</th><th>Birthday</th><th>Freund?</th><th></th><th></th></tr>';
    for (let i = 0; i < personList.length; i++) {
      const person = personList[i];
      let isFriend = "Nein";

      if(person.isFriend == true){
        isFriend = "Ja";
      }

      const htmlTr = `<tr>
              <td>${person.name}</td>
              <td>${person.birthday}</td>
              <td>${isFriend}</td>
              <td><button class="buttonUpdate">Update</button></td>
              <td><button class="buttonDelete">Delete</button></td>
          </tr>`;
      htmlTable += htmlTr;
    }

    const htmlFriendsCounter = `
    <p>Anzahl der Freunde: ${friendsCounter}
    </p>
    `;

    const html = `
        <h2>ListView</h2>
        <table>
            ${htmlTable}
        </table>
        <button id="buttonNew">New</button>
        ${htmlFriendsCounter}
        `;
    this.app = document.getElementById('app');
    this.app.innerHTML = html;

    // ---- Events for buttons ----
    this._registerEvents();
  }

  _registerEvents() {
    const buttonsUpdate = document.getElementsByClassName('buttonUpdate');
    for (let i = 0; i < buttonsUpdate.length; i++) {
      buttonsUpdate[i].addEventListener('click', () => {
        this.presenter.buttonUpdateClicked(i);
      });
    }

    const buttonsDelete = document.getElementsByClassName('buttonDelete');
    for (let i = 0; i < buttonsDelete.length; i++) {
      buttonsDelete[i].addEventListener('click', () => {
        this.presenter.buttonDeleteClicked(i);
      });
    }

    const buttonNew = document.getElementById('buttonNew');
    buttonNew.addEventListener('click', () => {
      this.presenter.buttonNewClicked();
    });
  }
}
