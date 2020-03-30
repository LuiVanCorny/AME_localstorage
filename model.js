import { Person } from './person.js';

export class Model {
  constructor() {
    this.personList = [];
    this.addPerson(new Person("Anna Arm", '2001-12-24', false));
    this.addPerson(new Person("Berta Bein", '1993-07-12', true));
    this.addPerson(new Person("Carla Copf", '1980-03-07', true));
    
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

  getFriendsCounter(){
    let counterFriends = 0;
    this.personList.forEach(person => {
      if(person.isFriend == true){
        counterFriends++;
      }
      
    });
    return counterFriends;
  }
}
