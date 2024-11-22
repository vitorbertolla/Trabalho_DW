let tarefas = []

let pos = 0 

let descricao = document.querySelector("#taksTexto")
let btn = document.querySelector("#buttonCriar")
let localTaks = document.querySelector('ul')

btn.addEventListener("click", () => criarTask(descricao.value))

function criarTask(descricao){
    if (descricao == "") {
        return window.alert('digite uma Tarefa para adicionar')
    } else{
    tarefas.push({id:pos, nome:descricao, feito:false})

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
    caixaTaks.appendChild(deleteTask)
    deleteTask.classList.add('deleteTask')

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
        let caixaUpdate = document.createElement('div')
        caixaUpdate.classList.add("caixaUpdate")
        caixaUpdate.appendChild(inputUpdate)

        tarefas[pos].nome = inputUpdate.value
        let btnConfirm = document.createElement('button')
        btnConfirm.textContent = "Salvar"
        btnConfirm.classList.add("btnConfirm")
        caixaUpdate.appendChild(btnConfirm)

        caixaTaks.appendChild(caixaUpdate)

        btnConfirm.addEventListener("click", () => {
            tarefas[pos].nome = inputUpdate.value

            p.textContent = inputUpdate.value

            caixaTaks.removeChild(caixaUpdate)
            })

    pos++

        }
    }
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