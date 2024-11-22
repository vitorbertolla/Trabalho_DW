let tarefas = []

let pos = 0 

let descricao = document.querySelector("#taksTexto")
let btn = document.querySelector("#buttonCriar")
let localTaks = document.querySelector('ul')

btn.addEventListener("click", () => criarTask(descricao.value));

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

    let deleteTask = document.createElement('button')
    deleteTask.src = "https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
    caixaTaks.appendChild(deleteTask)
    deleteTask.classList.add('deleteTask')

    deleteTask.addEventListener('click', () =>{
        delete tarefas[pos]
    })

    pos++
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