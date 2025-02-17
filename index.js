// const a=()=>{
//     let username;
//     console.log(username)
//     username="ishank"
//     console.log(username)
// }

// a()

// const b=function (a,b){
//     console.log('Hello World',a+b);
// }
// b(2,3)

// const 
// c=(a,b) => a+b;
// console.log(c(2,3));    


// object

// const obj={
//     name:"Ishank",
//     city:"Delhi",
// }
// const username=obj.name
// console.log(obj)
// const obj1={
//     name:"Ishank",
//     city:"Delhi",
// }
// obj.city="mumbai"
// console.log(obj)
// delete obj.city
// console.log(obj)
// const key="name"
// obj[key]="IshankDeshwal"
// console.log(obj)

// const a=prompt("Enter the marks of first subject")
// const b=prompt("Enter the marks of second subject")
// const c=prompt("Enter the marks of third subject")
// const d=prompt("Enter the marks of fourth subject")
// const e=prompt("Enter the marks of fifth subject")
// const total=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)
// const percentage=(total/500)*100
// const avg=total/5

const n=prompt("Enter the number of subjects")
let a=[5]
for(let i=0;i<n;i++){
     a[i]=prompt(`Enter the marks of ${i+1} subject`)
}
let total=0
for(let i=0;i<n;i++){
    total+=parseInt(a[i])
}
const avg=total/n
console.log(avg)



