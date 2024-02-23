class Person{
  constructor(Name,Age){
    this.Name = Name;
    this.Age =Age;
  }
  // country='BD'
  eat(){
      console.log( ` ${this.Name} now eat you're meal`)
  }
}

const mrP = new Person('abu', 49);
mrP.eat()
console.log(mrP)