let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newBtn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 let turn0=true;
 let count=0;

 const resetGame=()=>{
  turn0=true;
  count=0;
  enable();
  msgcon.classList.add("hide");
 }

boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
      
        if(turn0){
            box.innerText="O";
            turn0=false;
            box.style.color="darkblue";
        }
        else{
            box.innerText="X";
            turn0=true;
            box.style.color="black";
        }
        box.disabled=true;
        count++;
        //checkWinner();
        let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
      

    

        
    
    });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disable =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enable =()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>{
  msg.innerText=`Congratulations,Winner is ${winner}!!`;
  msgcon.classList.remove("hide");
  disable();
};


const checkWinner=()=>{
  for(let pattern of win){
  let pos1=boxes[pattern[0]].innerText;
  let pos2=boxes[pattern[1]].innerText;
  let pos3=boxes[pattern[2]].innerText;
 
  if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1===pos2 && pos2===pos3){

      showWinner(pos1);
    //  return true;
    }

  }
 

  }
  return true;
};



newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

