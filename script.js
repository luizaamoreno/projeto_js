const formulario = document.querySelector("#formulario")
const tarefa = document.querySelector("#tarefa")
const tarefas = document.querySelector("#tarefas")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    const nova_tarefa = document.createElement("li")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const tarefa_span = document.createElement("span")
    tarefa_span.textContent = tarefa.value

    const deletar = document.createElement("img")
    //deletar.id = "excluir"
    deletar.src = "https://cdn-icons-png.flaticon.com/128/6932/6932392.png"

    deletar.addEventListener("click", () =>{
        tarefas.removeChild(nova_tarefa);

    })

    checkbox.addEventListener("click", (evento) =>{
        if (evento.target.checked){
            tarefa_span.className = "checked"
            deletar.style.display = "none"
        }else{
            tarefa_span.className = ""
            deletar.style.display = "block"
        }
    })

    nova_tarefa.append(checkbox, tarefa_span, deletar)

    tarefas.appendChild(nova_tarefa)
    
    tarefa.value = ""
    tarefa.focus()

})
