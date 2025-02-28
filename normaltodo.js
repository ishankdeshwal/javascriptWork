
const main=document.getElementById('main')
const input=document.getElementById('input')

 const promptenter=()=>{
const enter=input.value.trim();
if(!enter){
    alert("please Enter Something Valid")
    return
}
const child=document.createElement('p')
const btn=document.createElement('button')
const deletebtn=document.createElement('button')
child.className='matter'
child.innerText=enter
child.style.padding='20px'
btn.innerText="Change Color"
const wraper=document.createElement('div')
const newDiv=document.createElement('div')
deletebtn.innerText='Delete'
wraper.style.marginLeft='20px'
wraper.style.display='flex'
wraper.style.marginTop='20px'
wraper.style.marginRight='20px'
wraper.style.padding='20px'
wraper.style.alignItems='center'
wraper.style.gap='10px'
wraper.appendChild(child)
newDiv.appendChild(btn)
newDiv.appendChild(deletebtn)
wraper.appendChild(newDiv)
main.appendChild(wraper)
wraper.style.justifyContent='space-between'
wraper.style.backgroundColor=getRandomColor()
btn.addEventListener('click',()=>{
    wraper.style.backgroundColor=getRandomColor()
})
deletebtn.addEventListener('click',()=>{
    wraper.remove()
})
input.value=''
 }
 const deletekro=()=>{
    const ele=document.querySelector('div')
    if(ele===null){
        alert("Nothing to delete")
    }else{
        ele.remove()
    }
 }
 const getRandomColor=()=>{
    const randomred=Math.floor(Math.random()*255)
    const randomgreen=Math.floor(Math.random()*255)
    const randomblue=Math.floor(Math.random()*255)
    return `rgb(${randomred},${randomgreen},${randomblue})`
 }
 