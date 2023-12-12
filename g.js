let boxes = document.querySelectorAll(".box");
let PLAY=document.querySelector("#Reset");
let newGamebtn=document.querySelector("#new-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcon.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){
    box.innerText = "O";
    turnO=false;
    }
    else{
        box.innerText = "X"; 
        turnO=true;
    }
   box.disabled  = true;

   checkwinner();
});
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
/* Existing code ... */

/* Existing code ... */

/* Existing code ... */

/* Existing code ... */

let fireworksContainer = null;

const showAttractiveFireworks = () => {
    fireworksContainer = document.createElement("div");
    fireworksContainer.classList.add("attractive-fireworks-container");

    for (let i = 0; i < 30; i++) {
        const fireworks = document.createElement("div");
        fireworks.classList.add("attractive-fireworks");
        fireworks.style.left = Math.random() * window.innerWidth + "px";
        fireworks.style.top = Math.random() * window.innerHeight + "px";
        fireworks.style.animationDelay = Math.random() + "s";
        fireworksContainer.appendChild(fireworks);
    }

    document.body.appendChild(fireworksContainer);
};

const hideAttractiveFireworks = () => {
    if (fireworksContainer) {
        document.body.removeChild(fireworksContainer);
        fireworksContainer = null;
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    msgcon.style.animation = "none"; // Reset animation
    void msgcon.offsetWidth; // Trigger reflow
    msgcon.style.animation = null; // Reapply animation
    showAttractiveFireworks(); // Add attractive fireworks
    disabledboxes();
};

const y = () => {
    hideAttractiveFireworks(); // Hide fireworks on game reset
    turnO = true;
    enableboxes();
    msgcon.classList.add("hide");
};

newGamebtn.addEventListener("click", y);
Reset.addEventListener("click", y);

/* Existing code ... */


/* Existing code ... */

const checkwinner=() =>{
    for(let pattern of winpattern){
    
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

   if(pos1val!=""&&pos2val!=""&&pos3val!="") {
    if(pos1val === pos2val && pos2val===pos3val){
        console.log("winner",pos1val);
        showwinner(pos1val);
    }
   }
}
};
newGamebtn.addEventListener("click",resetgame);
Reset.addEventListener("click",resetgame);

