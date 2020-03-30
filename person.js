export class Person {
  constructor(name, birthday, isFriend) {
    this.name = name;
    this.birthday = birthday;
    this.isFriend = isFriend;
    this.age = -1;
    this.setAge();
  }

  setAge() {
    var today = new Date();
    var birthDate = new Date(this.birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    this.age = age;
  }
}
