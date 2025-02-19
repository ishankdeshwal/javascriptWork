
// console.log(window)
// console.dir(document)


// document.write("Hello World")


// const para=document.getElementById("text")
// para.style.color="red"
// console.log(para);

// const outerDiv=document.getElementsByTagName("div")
// outerDiv[0].style.backgroundColor="blue"
// // outerDiv[2].style.backgroundColor="yellow"
// // outerDiv[1].style.backgroundColor="green"
// // outerDiv[3].style.backgroundColor="red"


// const divChild=Array.from(document.querySelectorAll("div div"))
// divChild.forEach((ele)=>{
//     ele.style.backgroundColor="yellow"
// })

const mappings = {
    Invitation:"you are invited to the party",
    Reminder : "you are reminded of the party",
    Notice : "you are notified of the party",
    Message : "you are messaged of the party",
};
const newElement = document.createElement("div"); // Corrected "createElement"
const rootElement = document.querySelector("body");
// newElement.innerText = "Hi Hello World"; // Fixed minor typo in text
rootElement.appendChild(newElement);

console.log(Object.entries(mappings));
Object.entries(mappings).forEach((key)=>{
    const newChild=document.createElement("div");
    newChild.style.border="5px solid "

    newChild.style.borderRadius="5px"
    newChild.style.margin="10px"
    newChild.style.padding="10px"
    newChild.innerHTML=`
    <h1 style="color:orange">${key[0]}</h1>
    <p>${key[1]}</p>
    `
    newElement.appendChild(newChild)
})