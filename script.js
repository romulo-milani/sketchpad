let container = document.querySelector(".container");
let btnAjustSize = document.querySelector(".ajustar-tamanho");

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

//ADICIONA O EVENTO PARA O USUÁRIO MUDAR O TAMANHO DO GRID
btnAjustSize.addEventListener("click", adjustSize);


function changeBackgroundColor(e) {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function adjustSize () {
    let test = true;
    while (test) {
        let newSize = prompt("Digite o novo tamanho: (máximo de 50)");
        if(newSize <= 50 && newSize > 0) {
            test = false;
            let squares = document.getElementsByClassName("square");

            //remove todos os elementos
            while (squares.length > 0) {
                squares[0].parentNode.removeChild(squares[0]);
            }

            //CRIA O NOVO GRID
            for (i = 0; i < newSize * newSize; i++) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.style.width = `${550/newSize}px`;
                square.style.height = `${550/newSize}px`;
                square.addEventListener("mouseenter", changeBackgroundColor);
                container.appendChild(square);
            }


        }
    }
    
}