// const fruits = ["Mango","Apple","Grape","Jackfruit"];

// // const x = fruits.join(',')

// // console.log(x)

// const name1 = {
//   personName1:{
//     firstName:"Abdur"
//   }
// }
// const name2 = {
//   personName2:{
//     secondName:"Rakib"
//   }
// }

// const get1 =name1.personName1.firstName;
// const get2 =name2.personName2.secondName;

// const fullName=`${get1} ${get2}`

// // console.log(fullName)
// const p = document.getElementById("paragraph");
// document.getElementById("change").addEventListener("click",()=>{
//   p.style.color='yellow'
// })

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);

const dreamGirl = [
  {
  sokina: {
   name: "bbu",
   height: "5.4",
   family: [{ father: "rock", mother: "shila", sister: "chinki" }],
   age: undefined,
   contactInfo: [
   {
    facebook: {
    link: "https://www.facebook.com/",
    followers: "12545",
    status: "single",
    friendsList: [{ name: "rofik" }, undefined],
    },
   },
   { instagram: "https://www.instagram.com/" },
   ],
  },
  },
 ];

 console.log(dreamGirl[0].sokina.contactInfo[1])