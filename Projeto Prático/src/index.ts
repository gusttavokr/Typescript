interface Task{
    id: number
    descrição: string
    feito: boolean
}

class Tarefa implements Task{
    id: number;
    descrição: string;
    feito: boolean;

    constructor(id: number, descrição: string, feito:boolean){
        this.id = id
        this.descrição = descrição
        this.feito = feito
    }
}

const tarefas: Tarefa[] = [];





// Acessando elementos HTML
const input = document.getElementById("nova-tarefa") as HTMLInputElement;
const botao = document.getElementById("adicionar") as HTMLButtonElement;
const ul = document.getElementById("lista-tarefas") as HTMLUListElement;

// Evento
botao.addEventListener("click", () => {
  const texto = input.value.trim(); // Evitar espaços vazios
  if (texto === "") return;

  const nova = new Tarefa(Date.now(), texto, false); // Criando tarefa
  tarefas.push(nova); // Inserindo na lista
  input.value = ""; // Limpa o input após inserção

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