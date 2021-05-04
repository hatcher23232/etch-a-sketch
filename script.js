const gridContanier = document.querySelector("#grid-contanier");
const singleCell = document.createElement("div");
singleCell.textContent.textContent = "hello";

let numOfCells= 256;
for (let i = 0;i<numOfCells;i++){
    const singleCell = document.createElement("div");
    singleCell.textContent = "hello";
    singleCell.style.color = "white";
    singleCell.classList.add("bg-red");
    singleCell.addEventListener('click',() => {
        alert("hello world");
    });

    gridContanier.appendChild(singleCell);
}