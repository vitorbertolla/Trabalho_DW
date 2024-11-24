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

    let p = document.createElement('p')
    caixaTaks.appendChild(p)
    p.textContent = descricao

    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = false
    caixaTaks.appendChild(checkbox)

    let deleteTask = document.createElement('img')
    deleteTask.src = "https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
    deleteTask.classList.add('deleteTask')
    caixaTaks.appendChild(deleteTask)

    deleteTask.addEventListener('click', () =>{
        tarefas.splice(pos, 1)
        localTaks.removeChild(caixaTaks) 
            })


    let updateTask = document.createElement('img')
    updateTask.src ="https://cdn-icons-png.flaticon.com/512/16/16310.png"
    caixaTaks.appendChild(updateTask)
    updateTask.classList.add("uptadeTask")

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
            const novoNome = inputUpdate.value.trim()
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