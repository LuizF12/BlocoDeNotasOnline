let storage = Window.localStorage;
let txt = document.getElementById("txt")

function salvar() {
    localStorage.setItem('texto',txt.value)
}

function carregar() {
    var textoCarregado = localStorage.getItem('texto')
    txt.innerText = textoCarregado
}
