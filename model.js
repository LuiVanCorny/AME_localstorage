import { Person } from './person.js';

export class Model {
  constructor() {
    this.personList = [
      { name: 'Anna Arm', birthday: '2001-12-24', isFriend: false },
      { name: 'Berta Bein', birthday: '1993-07-12', isFriend: true },
      { name: 'Carla Copf', birthday: '1980-03-07', isFriend: true }
    ];
  }

  // CREATE
  addPerson(person) {
    this.personList.push(person);
  }

  // READ
  getAllPersons() {
    return this.personList;
  }

  getPerson(index) {
    return this.personList[index];
  }

  // UPDATE
  updatePerson(index, newPerson) {
    this.personList[index] = newPerson;
  }

  // DELETE
  deletePerson(index) {
    this.personList.splice(index, 1);
  }
}
