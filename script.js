const gridContanier = document.getElementById("grid-contanier");
let userInput = 16;
for (let index = 0; index < userInput; index++) {
    let rowCon = document.createElement("div")

    for(let i = 0;i <userInput;i++){ 
    const singleCell = document.createElement("div");
    singleCell.textContent = ".";
    singleCell.style.color = "bg-red";
    singleCell.classList.add("bg-red");
singleCell.addEventListener('mouseover' , () => {       
        singleCell.classList.add= "bg-blue";
        singleCell.style.color = "bg-blue";
    });
rowCon.appendChild(singleCell);
}   
gridContanier.appendChild(rowCon);
}