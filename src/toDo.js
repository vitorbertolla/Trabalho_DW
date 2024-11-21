document.addEventListener("DOMContentLoaded", () => {
    const criarTask = (descricao) => {
        let localTaks = document.querySelectorAll('ul')

        let caixaTaks = document.createElement('li')
        caixaTaks.classList.add('caixaTaks')

        let checkbox = document.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = false

        let p = document.createElement('p')
        p.textContent = descricao
    }
})