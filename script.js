const boxes=document.querySelectorAll(".box");
const resetBtn=document.querySelector("#resetbtn");
const result=document.querySelector("#result");
heading=document.querySelector("h1")

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true;
        checkWinner();
    });
});
resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false
        result.innerText="";
        document.body.style.backgroundColor="#D9DBF1"
        heading.style.color="#416165"
    })

})
const checkWinner=() => {
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                document.body.style.backgroundColor="#0B3948"
                heading.style.color="white"

                if(pos1val==="O"){
                    result.innerText="Player One Wins !!!"
                }
                else{
                    result.innerText="Player Two Wins !!!"
                }

            }
        }
    
    }
}
