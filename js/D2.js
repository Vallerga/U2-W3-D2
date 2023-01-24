class Person {
  costrunctor(person1, person2, person3) {
    this.person1[(0, 1)] = data1;
    this.person1[(0, 1)] = data2;
    this.person1[(0, 1)] = data3;
    this.person1.name = name1;
    this.person1.age = age1;
    this.person2.name = name2;
    this.person2.age = age2;
    this.person3.name = name3;
    this.person3.age = age3;
  }
  compareAge2(data1, data2, data3) {
    let arrayPerson = [data1, data2, data3];
    let arrayAge = [data1[1], data2[1], data3[1]];
    arrayAge.sort();
    return arrayAge.map((element) => arrayPerson.filter((el) => el[1] === element));
  }
  compareAge(age1, age2, age3) {
    let arrayAge = [age1, age2, age3];
    arrayAge.sort();
    console.log(arrayAge);
  }
}

let marioRossi = ["Mario", "32"];
let GiovanniRana = ["Giovanni", "23"];
let EleonoraGenoveffa = ["Eleonora", "66"];

let personAgeComparator = new Person(marioRossi, GiovanniRana, EleonoraGenoveffa);
console.log(personAgeComparator.compareAge2(marioRossi, GiovanniRana, EleonoraGenoveffa));

// secondo esercizio

// crea classe gen array

class Usertable {
  constructor(param1, param2, param3) {
    this.name = param1;
    this.surname = param2;
    this.age = param3;
  }
}

// istanza gen array

let z = 0;
const arrayOfUser = [];
const createArray = (par1, par2, par3) => {
  let newUser = new Usertable(par1, par2, par3);
  z++;
  arrayOfUser[z] = arrayOfUser;
  console.log(arrayOfUser);
};

const items = [];
class Webdisplay {
  constructor(items, par) {
    this.pageSize = par;
    this.items = items;
  }
  createPage(array) {
    for (i = 0; i < par; i++) {
      let AddRowTbody = document.querySelector("tbody");
      const newRow2 = document.createElement("tr");
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.innerText = par[i].name;
      const td2 = document.createElement("td");
      td2.innerText = par[i].surname;
      const td3 = document.createElement("td");
      td3.innerText = par[i].age;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      newRow2.appendChild(tr);
      AddRowTbody.appendChild(newRow2);
    }
  }
}
const name1 = document.querySelector("#name1");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const button = document.getElementById("button");
let nodeToAttach = document.querySelector("tbody");
