let tarefas = []

let pos = 0 

let descricao = document.querySelector("#taksTexto")
let btn = document.querySelector("#buttonCriar")
let localTaks = document.querySelector('ul')

btn.addEventListener("click", () => criarTask(descricao.value))

function criarTask(descricao){
    if (descricao == "") {
        return window.alert('Digite uma Tarefa para adicionar!!!')
    } else{

    const novaTarefa = { id: pos, nome: descricao, feito: false}
    tarefas.push(novaTarefa)

    let caixaTaks = document.createElement('li')
    caixaTaks.classList.add('caixaTaks')
    localTaks.appendChild(caixaTaks)

    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = false
    caixaTaks.appendChild(checkbox)

    let p = document.createElement('p')
    p.textContent = descricao
    caixaTaks.appendChild(p)


    let deleteTask = document.createElement('img')
    deleteTask.src = "data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-trash%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M4%207l16%200%22%20/%3E%3Cpath%20d=%22M10%2011l0%206%22%20/%3E%3Cpath%20d=%22M14%2011l0%206%22%20/%3E%3Cpath%20d=%22M5%207l1%2012a2%202%200%200%200%202%202h8a2%202%200%200%200%202%20-2l1%20-12%22%20/%3E%3Cpath%20d=%22M9%207v-3a1%201%200%200%201%201%20-1h4a1%201%200%200%201%201%201v3%22%20/%3E%3C/svg%3E"
    deleteTask.classList.add('deleteTask')
    caixaTaks.appendChild(deleteTask)

    deleteTask.addEventListener('click', () =>{
        tarefas = tarefas.filter((tarefa) => tarefa.id !== novaTarefa.id)
        localTaks.removeChild(caixaTaks) 
            })


    let updateTask = document.createElement('img')
    updateTask.src ="data:image/svg+xml,%3Csvg%20%20xmlns=%22http://www.w3.org/2000/svg%22%20%20width=%2224%22%20%20height=%2224%22%20%20viewBox=%220%200%2024%2024%22%20%20fill=%22none%22%20%20stroke=%22currentColor%22%20%20stroke-width=%222%22%20%20stroke-linecap=%22round%22%20%20stroke-linejoin=%22round%22%20%20class=%22icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-pencil%22%3E%3Cpath%20stroke=%22none%22%20d=%22M0%200h24v24H0z%22%20fill=%22none%22/%3E%3Cpath%20d=%22M4%2020h4l10.5%20-10.5a2.828%202.828%200%201%200%20-4%20-4l-10.5%2010.5v4%22%20/%3E%3Cpath%20d=%22M13.5%206.5l4%204%22%20/%3E%3C/svg%3E"
    updateTask.classList.add("updateTask")
    caixaTaks.appendChild(updateTask)

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

        caixaTaks.appendChild(caixaUpdate)

        btnConfirm.addEventListener("click", () => {
            const novoNome = inputUpdate.value
            if (novoNome) {
                novaTarefa.nome = novoNome
                p.textContent = novoNome
                caixaTaks.removeChild(caixaUpdate)
            } else {
                window.alert("O nome da tarefa não pode estar vazio!!!")
            }
            })

            
        })
    }
    pos++
}

function desenvolvimento() {
    const totalTask = document.querySelector(".").length
    const feitaTaks = document.querySelector("input:cheked").length
}



// console.log(tarefas)







// const criarTask = (descricao) => {
//     



   

//     

//     caixaTaks.appendChild(checkbox)
//     caixaTaks.appendChild(p)
// }
// let tarefas = [
//     {idTarefa: 1, nome: "fazer trabalho", feito:false}
// ]