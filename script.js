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

// Loading Screen - Generate Shooting Stars
function createLoadingStars() {
const loadingStarsContainer = document.getElementById('loading-stars');
const starCount = 30;

for (let i = 0; i < starCount; i++) {
const star = document.createElement('div');
star.className = 'loading-star';

// Random position
star.style.left = Math.random() * 100 + '%';
star.style.top = Math.random() * 60 + '%';

// Random size
const size = Math.random() * 3 + 2;
star.style.width = size + 'px';
star.style.height = size + 'px';

// Random animation duration and delay
const duration = Math.random() * 1 + 0.8;
const delay = Math.random() * 3;
star.style.animationDuration = duration + 's';
star.style.animationDelay = delay + 's';

// Random angle variation
const angleVariation = Math.random() * 20 - 10;
star.style.setProperty('--angle', angleVariation + 'deg');

loadingStarsContainer.appendChild(star);
}
}

// Handle loading screen
function initLoadingScreen() {
createLoadingStars();

// Wait for name animation to complete (1.5s) + some extra time
setTimeout(() => {
const loadingScreen = document.getElementById('loading-screen');
loadingScreen.classList.add('fade-out');

// Remove loading screen from DOM after fade out
setTimeout(() => {
loadingScreen.style.display = 'none';
}, 1000);
}, 3500);
}

// Initialize loading screen when DOM is ready
document.addEventListener('DOMContentLoaded', initLoadingScreen);

