const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");
const azul = document.getElementById("azul");
const reset = document.getElementById("reset");
const container = document.getElementById("container");

verde.addEventListener("click", () => {
    container.style.backgroundColor = "green";
});
vermelho.addEventListener("click", () => {
    container.style.backgroundColor = "red";
});
azul.addEventListener("click", () => {
    container.style.backgroundColor = "blue";
});
reset.addEventListener("click", () => {
    container.style.removeProperty("background-color");
});
