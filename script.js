/*=========================
MUSIC
=========================*/

const bgm = document.getElementById("bgm");

let musicStarted = false;

function startMusic(){

    if(musicStarted) return;

    musicStarted = true;

    bgm.volume = 0.35;

    bgm.play().catch(err=>{

        console.log("Music blocked",err);

    });

}

/*=========================
KUNANG KUNANG
=========================*/

const fireflies = document.getElementById("fireflies");

for(let i=0;i<18;i++){

    const fly=document.createElement("div");

    fly.className="firefly";

    const size=Math.random()*3+2;

    fly.style.width=size+"px";
    fly.style.height=size+"px";

    fly.style.left=Math.random()*100+"vw";
    fly.style.top=Math.random()*100+"vh";

    fly.style.animationDuration=
        (12+Math.random()*8)+"s,"+
        (2+Math.random()*2)+"s";

    fly.style.animationDelay=
        (-Math.random()*20)+"s";

    fireflies.appendChild(fly);

}

/*=========================
BOOK ENGINE
=========================*/

const pages = document.querySelectorAll(".page");

const next = document.getElementById("next");

const prev = document.getElementById("prev");

let current = 0;

prev.disabled = true;

updateButtons();

function updateButtons(){

    prev.disabled = current === 0;

    next.disabled = current >= pages.length - 1;

    prev.style.opacity = current === 0 ? ".4" : "1";

    next.style.opacity = current >= pages.length - 1 ? ".4" : "1";

}

next.addEventListener("click",()=>{

    startMusic();

    if(current >= pages.length - 1){

        updateButtons();

        return;

    }

    pages[current].classList.add("flip");

    current++;

    updateButtons();

});

prev.addEventListener("click",()=>{

    startMusic();
    if(current <= 0){

        updateButtons();

        return;

    }

    current--;

    pages[current].classList.remove("flip");

    updateButtons();

});

/*=========================
SWIPE
=========================*/

let startX = 0;

document.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

document.addEventListener("touchend",(e)=>{

    const endX = e.changedTouches[0].clientX;

    if(startX - endX > 60){

        next.click();

    }

    if(endX - startX > 60){

        prev.click();

    }

});

/*=========================
KEYBOARD
=========================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        next.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

});