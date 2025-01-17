let container = document.querySelector(".container");

//CRIA O GRID DE QUADRADOS
for (i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}
//SELECIONA CADA QUADRADO APÓS SEREM CRIADO
let square = document.querySelectorAll(".square");

//ADICIONA O EVENTO QUE MUDA A COR QUANDO O MOUSE ENTRA NO QUADRADO
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", changeBackgroundColor);
}

function changeBackgroundColor(e) {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}