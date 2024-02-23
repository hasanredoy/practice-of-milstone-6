// class vebohar kore kicu defult Object er moto kore radimade function raka jay ja pore use kora jay 

class Person{
  constructor(Name,Age){
    this.Name = Name;
    this.Age =Age;
  }
  country='BD'
  height(feet){
      console.log( `you're height in ${feet} feet`)
  }
}

const person = new Person('hossain','21')
person.height(5)

console.log(person)