let tarefas = []

let pos = 0 

let inputDescricao = document.querySelector("#taskTexto")
let btn = document.querySelector("#buttonCriar")
let localTaks = document.querySelector('ul')

btn.addEventListener("click", () => criarTask(inputDescricao.value))

function criarTask(descricao){
    if (descricao == "") {
        return window.alert('Digite uma Tarefa para adicionar!!!')
    } else{

    const novaTarefa = { id: pos, nome: descricao, feito: false}
    tarefas.push(novaTarefa)

    let caixaTask = document.createElement('li')
    caixaTask.classList.add('caixaTask')
    localTaks.appendChild(caixaTask)

    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("data-id", novaTarefa.id)
    // pra vincular o checkbox com a tarefa
    checkbox.checked = false
    caixaTask.appendChild(checkbox)

    let p = document.createElement('p')
    p.textContent = descricao
    caixaTask.appendChild(p)


    inputDescricao.value = ""   

    desenvolvimento()


    checkbox.addEventListener('click', () => {
        const tarefaId = parseInt(checkbox.getAttribute("data-id"))
        //  esse parseint converte string em numero
        const tarefa = tarefas.find(t => t.id == tarefaId)
        if (tarefa) {
            tarefa.feito = checkbox.checked
            desenvolvimento()
        if(checkbox.checked === true) {
            // p.add.classList("checkboxTrue")
            p.style.textDecoration = 'line-through' 
            }
        else if (checkbox.checked === false){
            p.style.textDecoration = 'none'
        } 
    
        }
    })

    




    let deleteTask = document.createElement('img')
    deleteTask.src = "data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-trash%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M4%207l16%200%22%20/%3E%3Cpath%20d=%22M10%2011l0%206%22%20/%3E%3Cpath%20d=%22M14%2011l0%206%22%20/%3E%3Cpath%20d=%22M5%207l1%2012a2%202%200%200%200%202%202h8a2%202%200%200%200%202%20-2l1%20-12%22%20/%3E%3Cpath%20d=%22M9%207v-3a1%201%200%200%201%201%20-1h4a1%201%200%200%201%201%201v3%22%20/%3E%3C/svg%3E"
    deleteTask.classList.add('deleteTask')
    caixaTask.appendChild(deleteTask)

    deleteTask.addEventListener('click', () =>{
        tarefas = tarefas.filter((tarefa) => tarefa.id !== novaTarefa.id)
        localTaks.removeChild(caixaTask) 
        desenvolvimento()
            })


    let updateTask = document.createElement('img')
    updateTask.src ="data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-pencil%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M4%2020h4l10.5%20-10.5a2.828%202.828%200%201%200%20-4%20-4l-10.5%2010.5v4%22%20/%3E%3Cpath%20d=%22M13.5%206.5l4%204%22%20/%3E%3C/svg%3E"
    updateTask.classList.add("updateTask")
    caixaTask.appendChild(updateTask)

    updateTask.addEventListener("click", () => {
        let inputUpdate = document.createElement('input')
        inputUpdate.classList.add("inputUpdate")
        inputUpdate.value = novaTarefa.nome

        let caixaUpdate = document.createElement('div')
        caixaUpdate.classList.add("caixaUpdate")
        caixaUpdate.appendChild(inputUpdate)

        let btnConfirm = document.createElement('button')
        btnConfirm.textContent = "Salvar"
        btnConfirm.classList.add("btnConfirm")
        caixaUpdate.appendChild(btnConfirm)

        caixaTask.appendChild(caixaUpdate)

        btnConfirm.addEventListener("click", () => {
            const novoNome = inputUpdate.value
            if (novoNome) {
                novaTarefa.nome = novoNome
                p.textContent = novoNome
                caixaTask.removeChild(caixaUpdate)
            } else {
                window.alert("O nome da tarefa não pode estar vazio!!!")
            }
            })
            desenvolvimento()


            
        })

    }
    pos++

}





function desenvolvimento() { 
   const totalTarefa = tarefas.length
   const tarefasfeitas = tarefas.filter(t => t.feito).length

   const progresso = document.querySelector("#prog")
   const progDiv = document.querySelector('#progresso')
   let progress = progDiv.querySelector("progress")

   progresso.innerHTML = `${tarefasfeitas}/${totalTarefa} das tarefas feitas`

   if (!progress) {
    progress = document.createElement('progress')
    
    progDiv.appendChild(progress)
}
    progress.max = totalTarefa
    progress.value = tarefasfeitas


}


const alunos = [
    {
        id: 1,
        nome: "Hiago",
        idade: 16
    },
    {
        id: 2,
        nome: "Vitor",
        idade: 16
    },
    {
        id: 3,
        nome: "Garro",
        idade: 16
    }
]

const alunosTela = document.querySelector('#alunosTela')
const tela = document.querySelector('#tela')
const alunosLista = document.querySelector('#alunosLista')
const fecharTela = document.querySelector('#fecharTela')

function abrirTela() {
    alunosLista.innerHTML = ''
    alunos.map((aluno) => {
        const caixaAluno = document.createElement('li')
        caixaAluno.textContent = `${aluno.nome} - ${aluno.idade} anos`
        alunosLista.appendChild(caixaAluno) 
    })
    alunosTela.style.display = "block"
    tela.style.display = "block"
}

function fecharTelaComando() {
    alunosTela.style.display = "none"
    tela.style.display = "none"
}

fecharTela.addEventListener('click', fecharTelaComando)
tela.addEventListener('click', fecharTelaComando)

const comando = document.addEventListener('keydown', (event) => {
    if(event.ctrlKey && event.key === 'h') {
        event.preventDefault()
        abrirTela()
    }
}) 

const comandoEnter = document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault()
        criarTask(inputDescricao.value)
    }
}) 



const botaoAlterarTema = document.querySelector("#alterarTema")

function alterarTema() {
document.body.classList.toggle("dark-mode")

const icone = botaoAlterarTema.querySelector("i")
if (document.body.classList.contains("dark-mode")) {
    icone.classList.remove("fa-moon")
    icone.classList.add("fa-sun")
} else {
    icone.classList.remove("fa-sun")
    icone.classList.add("fa-moon")
}
}

botaoAlterarTema.addEventListener("click", alterarTema)