const handlebg=()=>{
    console.log("clicked");
    const bodyelement=document.querySelector('body')
    bodyelement.style.backgroundColor=getRandomColor()
}
handleChange=(event)=>{
    console.log(event.target.value);
}
handleKeyDown=(event)=>{
    console.log(event.target.value);
}
handleKeyUp=(event)=>{
    console.log(event.target.value);
}
const getRandomColor=()=>{
    const randomred=Math.floor(Math.random()*255)
    const randomgreen=Math.floor(Math.random()*255)
    const randomblue=Math.floor(Math.random()*255)
    return `rgb(${randomred},${randomgreen},${randomblue})`
}