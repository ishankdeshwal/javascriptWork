const getData= async()=>{
    const input=document.querySelector('input')
    const profile=input.value.trim();
    console.log(profile);
    try{
        const res= await fetch(`https://api.github.com/users/${profile}`)
        console.log(res);
        const res1=await res.json();
        showUI(res1);
        console.log(res1);
    }catch(err){
        console.log(err);
    }
}
const showUI=(data)=>{
    console.log(data);
    let {avatar_url,login,html_url}=data
    const card=document.getElementById('card')
    card.innerHTML=`
        <h4>${login}</h4>
        <img src='${avatar_url}'></img>
        <a href='${html_url}'>Click me</a>
    `
}
