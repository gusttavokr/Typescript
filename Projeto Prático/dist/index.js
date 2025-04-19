"use strict";
class Tarefa {
    constructor(id, descrição, feito) {
        this.id = id;
        this.descrição = descrição;
        this.feito = feito;
    }
}
function addtask(tarefa, array) {
    array.push(tarefa);
}
const tarefas = [];
const input = document.getElementById("nova-tarefa");
const botao = document.getElementById("adicionar");
const ul = document.getElementById("lista-tarefas");
botao.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "")
        return;
    const nova = new Tarefa(Date.now(), texto, false);
    tarefas.push(nova);
    input.value = "";
    renderizarTarefas();
});
function renderizarTarefas() {
    ul.innerHTML = ""; // Limpa a lista antes de redesenhar
    for (const tarefa of tarefas) {
        const li = document.createElement("li");
        li.textContent = tarefa.descrição;
        if (tarefa.feito) {
            li.style.textDecoration = "line-through";
        }
        li.addEventListener("click", () => {
            tarefa.feito = !tarefa.feito;
            renderizarTarefas();
        });
        ul.appendChild(li);
    }
}
