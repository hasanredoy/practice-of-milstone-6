////////////////////task1/////////////

// get the secondary school location 

let data ={
 shopia:{
  id:809,
  study:[
     {
      primary:[
          {school_name: 'abscfdd'},
          {location: 'abc street'}
     ]
    },
     {
      secondary:[
          {school_name: 'abscfdd'},
          {location: 'abc streetnnnnnnnnnnnnn'}
     ]
    }
  ]
 }

}

// console.log(data.shopia.study[1].secondary[1].location)

// task 2 ///////


let students ={
  2222:{
   id:809,
   address:
      {
      'bulding':12,
      "city":'Petersburg'
     }
  },

  3333:{
    name:'harry',
    address:
       {
       'bulding':12,
       "city":'Petersburg'
      }
   },
  }
 
//  console.log(students[2222].address.city ,(students[3333].name))

// task 4//////////////////////

const num = [1, 3, 5, 7 ,9];

const even = num.map(n => n+1);
// console.log(even)

// task 4.2/////////

const abNumbers = [33, 50, 79, 78, 90, 101, 30]

const usingFind = abNumbers.find(n=> n%10 === 0)
// const diviseble = abNumbers.filter(n => n%10 ===0)

// console.log(diviseble)
// console.log(usingFind)

// task 5

// show the input based on senior keyword

let obbjj =[
   {name:'unknown', age:43, position:'senior'},
   {name:'known', age:43, position:'junior'},
   {name:'unknown', age:43, position:'senior'}
]


const filtering = obbjj.filter(obj => obj.position == 'junior');


// console.log(filtering)

/////////////////task 6 ////////

let getAge =[
   {name:'unknown', age:43, position:'senior'},
   {name:'known', age:43, position:'junior'},
   {name:'unknown', age:43, position:'senior'}
]

const getValueOfAge = getAge.reduce((a2,a3) =>  {return a2 + a3.age }, 0);

console.log(getValueOfAge)
 