const gridContanier = document.getElementById("grid-contanier");
let userInput = 16;


function bildgrid(){
    for (let index = 0; index < userInput; index++) {
        let rowCon = document.createElement("div")
        for(let i = 0;i<userInput;i++){ 
        const singlecell = document.createElement("div");
        singlecell.textContent = ".";
        singlecell.style.color = "bg-red";
        singlecell.classList.add("bg-red");
        singlecell.addEventListener('mouseover' , () => {       
            singlecell.classList.add ("bg-blue");
            singlecell.style.color = "bg-blue";
        });
        rowCon.appendChild(singlecell);
    }   
    gridContanier.appendChild(rowCon);
    }
}

document.getElementById("btn").addEventListener("click",() =>{
    userInput=prompt("pick a size for next grid");
    gridContanier.innerHTML="";
    bildgrid();

})

bildgrid();

