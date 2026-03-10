function scrollProjects(){
document.getElementById("projects").scrollIntoView({behavior:"smooth"})
}

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight

let progress=(scrollTop/height)*100

document.getElementById("progress-bar").style.width=progress+"%"

})

const text=[
"Frontend Developer",
"React Developer",
"ECE Engineer",
"IoT Developer"
]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){

current=text[i]

if(!isDeleting){

document.querySelector(".typing").textContent=current.substring(0,j++)
if(j>current.length){
isDeleting=true
setTimeout(type,1500)
return
}

}else{

document.querySelector(".typing").textContent=current.substring(0,j--)
if(j==0){
isDeleting=false
i=(i+1)%text.length
}

}

setTimeout(type,100)

}

type()

