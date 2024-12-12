// Objeto para armazenar as tarefas
let tarefas = [];

// Variável para controlar o ID das tarefas
let pos = 0;

// Obtém a referência ao campo de entrada de texto onde o usuário escreve a tarefa
let inputDescricao = document.querySelector("#taskTexto");

// Obtém a referência ao botão que cria uma nova tarefa
let btn = document.querySelector("#buttonCriar");

// Obtém a referência à lista que exibirá as tarefas
let localTaks = document.querySelector("ul");

// Adiciona um evento de clique ao botão para criar uma tarefa
btn.addEventListener("click", () => criarTask(inputDescricao.value));

// Função para criar uma nova tarefa
function criarTask(descricao) {
  // Verifica se a descrição da tarefa está vazia
  if (descricao == "") {
    return window.alert("Digite uma Tarefa para adicionar!!!"); // Exibe um alerta e interrompe a função
  } else {
    // Cria um objeto representando a tarefa com ID, nome e status de conclusão
    const novaTarefa = { id: pos, nome: descricao, feito: false };
    tarefas.push(novaTarefa); // Adiciona a tarefa ao array de tarefas

    // Cria o elemento visual (li) para exibir a tarefa
    const caixaTask = document.createElement("li");
    caixaTask.classList.add("caixaTask"); // Adiciona uma classe ao elemento li
    localTaks.appendChild(caixaTask); // Adiciona o elemento li à lista de tarefas

    // Cria um checkbox para marcar a tarefa como concluída
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox"); // Define o tipo do input como checkbox
    checkbox.setAttribute("data-id", novaTarefa.id); // Associa o ID da tarefa ao checkbox
    checkbox.checked = false; // Define o estado inicial como "não marcado"
    checkbox.classList.add("checkbox"); // Adiciona uma classe ao checkbox
    caixaTask.appendChild(checkbox); // Adiciona o checkbox ao elemento li

    // Cria um elemento de texto para exibir o nome da tarefa
    const p = document.createElement("p");
    p.textContent = descricao; // Define o texto da tarefa
    caixaTask.appendChild(p); // Adiciona o texto ao elemento li

    // Limpa o campo de entrada de texto após criar a tarefa
    inputDescricao.value = "";

    // Atualiza o progresso das tarefas
    desenvolvimento();

    // Adiciona um evento ao checkbox para alterar o status da tarefa
    checkbox.addEventListener("click", () => {
      const tarefaId = parseInt(checkbox.getAttribute("data-id")); // Obtém o ID da tarefa associado ao checkbox
      const tarefa = tarefas.find((t) => t.id == tarefaId); // Localiza a tarefa correspondente no array
      if (tarefa) {
        tarefa.feito = checkbox.checked; // Atualiza o status de conclusão da tarefa
        desenvolvimento(); // Atualiza o progresso

        // Aplica ou remove o estilo de riscado dependendo do estado do checkbox
        if (checkbox.checked === true) {
          p.style.textDecoration = "line-through"; // Marca o texto como riscado
        } else if (checkbox.checked === false) {
          p.style.textDecoration = "none"; // Remove o estilo de riscado
        }
      }
    });

    // Cria um botão (ícone) para deletar a tarefa
    const deleteTask = document.createElement("img");
    deleteTask.src = "URL_BASE64_DO_ICONE"; // Define o ícone do botão
    deleteTask.classList.add("deleteTask"); // Adiciona uma classe ao botão
    caixaTask.appendChild(deleteTask); // Adiciona o botão ao elemento li

    // Adiciona um evento ao botão de deletar para remover a tarefa
    deleteTask.addEventListener("click", () => {
      tarefas = tarefas.filter((tarefa) => tarefa.id !== novaTarefa.id); // Remove a tarefa do array
      localTaks.removeChild(caixaTask); // Remove o elemento li do DOM
      desenvolvimento(); // Atualiza o progresso
    });

    // Cria um botão (ícone) para editar a tarefa
    const updateTask = document.createElement("img");
    updateTask.src = "URL_BASE64_DO_ICONE"; // Define o ícone do botão
    updateTask.classList.add("updateTask"); // Adiciona uma classe ao botão
    caixaTask.appendChild(updateTask); // Adiciona o botão ao elemento li

    // Adiciona um evento ao botão de editar para permitir a edição do nome da tarefa
    updateTask.addEventListener("click", () => {
      const existeInputUpdate = document.querySelector(".inputUpdate"); // Verifica se já existe um campo de edição aberto
      if (existeInputUpdate) {
        alert("A caixa de atualização já está aberta!!!"); // Exibe um alerta se já houver um campo aberto
      } else {
        const inputUpdate = document.createElement("input"); // Cria um campo de entrada para a edição
        inputUpdate.classList.add("inputUpdate"); // Adiciona uma classe ao campo de entrada
        inputUpdate.value = novaTarefa.nome; // Preenche o campo com o nome atual da tarefa

        const caixaUpdate = document.createElement("div"); // Cria um contêiner para o campo de edição
        caixaUpdate.classList.add("caixaUpdate"); // Adiciona uma classe ao contêiner
        caixaUpdate.appendChild(inputUpdate); // Adiciona o campo de entrada ao contêiner

        const btnConfirm = document.createElement("button"); // Cria um botão para salvar a edição
        btnConfirm.textContent = "Salvar"; // Define o texto do botão
        btnConfirm.classList.add("btnConfirm"); // Adiciona uma classe ao botão
        caixaUpdate.appendChild(btnConfirm); // Adiciona o botão ao contêiner

        caixaTask.appendChild(caixaUpdate); // Adiciona o contêiner ao elemento li

        // Adiciona um evento ao botão de salvar para confirmar a edição
        btnConfirm.addEventListener("click", () => {
          const novoNome = inputUpdate.value; // Obtém o novo nome digitado
          if (novoNome) {
            novaTarefa.nome = novoNome; // Atualiza o nome no objeto da tarefa
            p.textContent = novoNome; // Atualiza o nome no elemento li
            caixaTask.removeChild(caixaUpdate); // Remove o contêiner de edição
          } else {
            window.alert("O nome da tarefa não pode estar vazio!!!"); // Exibe um alerta se o campo estiver vazio
          }
        });
        desenvolvimento(); // Atualiza o progresso
      }
    });
  }
  pos++; // Incrementa o ID para a próxima tarefa
}

// Função para calcular e atualizar o progresso das tarefas
function desenvolvimento() {
  const totalTarefa = tarefas.length; // Obtém o total de tarefas
  const tarefasfeitas = tarefas.filter((t) => t.feito).length; // Calcula o total de tarefas concluídas

  const progresso = document.querySelector("#prog"); // Seleciona o elemento que exibe o progresso
  const progDiv = document.querySelector("#progresso"); // Seleciona o contêiner da barra de progresso
  let progress = progDiv.querySelector("progress"); // Seleciona a barra de progresso, se existir

  progresso.innerHTML = `${tarefasfeitas}/${totalTarefa} das tarefas feitas`; // Atualiza o texto de progresso

  if (!progress) {
    progress = document.createElement("progress"); // Cria a barra de progresso se não existir
    progress.classList.add("barraProgresso"); // Adiciona uma classe à barra de progresso
    progDiv.appendChild(progress); // Adiciona a barra de progresso ao contêiner
  }

  progress.max = totalTarefa; // Define o valor máximo da barra como o total de tarefas
  progress.value = tarefasfeitas; // Define o valor atual da barra como o total de tarefas feitas
}

// Array de objetos que representa os alunos
const alunos = [
  {
    id: 1,
    nome: "Hiago Gimenez",
    idade: 16,
    whats: "https://wa.me/44999378434", // Link para contato no WhatsApp
  },
  {
    id: 2,
    nome: "Vitor Bertolla",
    idade: 16,
    whats: "https://wa.me/44997590100",
  },
  {
    id: 3,
    nome: "Rodrigo Garro",
    idade: 20,
    whats: "https://wa.me/44997590100",
  },
];

// Obtém as referências aos elementos da tela de exibição dos alunos
const alunosTela = document.querySelector("#alunosTela"); // Contêiner principal da tela dos alunos
const tela = document.querySelector("#tela"); // Contêiner para o fundo da tela modal
const alunosLista = document.querySelector("#alunosLista"); // Lista onde os alunos serão exibidos
const fecharTela = document.querySelector("#fecharTela"); // Botão para fechar a tela dos alunos

// Função para abrir a tela com a lista de alunos
function abrirTela() {
  alunosLista.innerHTML = ""; // Limpa a lista de alunos antes de renderizar os dados
  alunos.map((aluno) => {
    // Itera sobre o array de alunos
    const caixaAluno = document.createElement("li"); // Cria um item da lista para cada aluno
    caixaAluno.innerHTML = ` 
        ${aluno.nome} - ${aluno.idade} anos 
        <a aria-label="Chat on WhatsApp" href="${aluno.whats}" target="_blank"> 
          <img alt="Chat on WhatsApp" 
          src="https://cdn-icons-png.flaticon.com/512/3799/3799934.png" 
          style="height: 20px; width: 20px;" />
        </a>
      `; // Adiciona o nome, idade e link para o WhatsApp
    alunosLista.appendChild(caixaAluno); // Adiciona o item à lista
  });

  alunosTela.style.display = "block"; // Mostra o contêiner principal
  tela.style.display = "block"; // Mostra o fundo da tela modal
}

// Função para fechar a tela de exibição dos alunos
function fecharTelaComando() {
  alunosTela.style.display = "none"; // Esconde o contêiner principal
  tela.style.display = "none"; // Esconde o fundo da tela modal
}

// Adiciona um evento ao botão para fechar a tela dos alunos
fecharTela.addEventListener("click", fecharTelaComando);

// Adiciona um evento ao fundo da tela modal para fechá-la ao clicar fora do contêiner principal
tela.addEventListener("click", fecharTelaComando);

// Adiciona um atalho de teclado (Ctrl + H) para abrir a tela dos alunos
const comando = document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "h") {
    // Verifica se a combinação de teclas Ctrl + H foi pressionada
    event.preventDefault(); // Impede o comportamento padrão do navegador
    abrirTela(); // Chama a função para abrir a tela
  }
});

// Adiciona um atalho de teclado (Enter) para criar uma nova tarefa
const comandoEnter = document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Verifica se a tecla Enter foi pressionada
    event.preventDefault(); // Impede o comportamento padrão do navegador
    criarTask(inputDescricao.value); // Cria uma nova tarefa com o valor do campo de texto
  }
});

// Obtém a referência ao botão que altera o tema da página
const botaoAlterarTema = document.querySelector("#alterarTema");

// Função para alternar entre o tema claro e escuro
function alterarTema() {
  document.body.classList.toggle("dark-mode"); // Alterna a classe "dark-mode" no elemento body

  const icone = botaoAlterarTema.querySelector("i"); // Obtém o ícone dentro do botão

  // Verifica se o modo escuro está ativo para alterar o ícone
  if (document.body.classList.contains("dark-mode")) {
    icone.classList.remove("fa-moon"); // Remove o ícone de lua
    icone.classList.add("fa-sun"); // Adiciona o ícone de sol
  } else {
    icone.classList.remove("fa-sun"); // Remove o ícone de sol
    icone.classList.add("fa-moon"); // Adiciona o ícone de lua
  }
}

// Adiciona um evento de clique ao botão para alterar o tema
botaoAlterarTema.addEventListener("click", alterarTema);
