// inherit class tar uporer class teke value nibe abong tar nijer kicu value takbe 

class Person{
  constructor(Name,Age){
    this.Name = Name;
    this.Age =Age;
  }
}

class Person2 extends Person {
  constructor(Name, Age ,isRich){
    super(Name, Age);
    this. isRich = isRich;
  }
}

const person = new Person2("redoy" , 21, false);
console.log(person)