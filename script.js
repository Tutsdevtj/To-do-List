let vezes = 0



document.getElementById('btn').addEventListener("click", function () {

    const myList = document.getElementById('myList')
    const myTask = document.getElementById('task').value
    const tarefa = document.createElement("li")
    const textoSpan = document.createElement("span")
    const botao = document.createElement("input")
    const botao2 = document.createElement("input")


    const prioridadeSelecionada = document.querySelector('input[name="prioridade"]:checked').value;

    if (prioridadeSelecionada == "importante") {
        tarefa.style.border = "2px solid #e53935"

    } else if (prioridadeSelecionada == "marromeno") {
        tarefa.style.border = "2px solid #f9a825"
    }

    else if (prioridadeSelecionada == "tasuave") {
        tarefa.style.border = "2px solid #29b6f6"
    }


    botao2.type = 'button'
    botao2.classList = 'btnC'
    botao2.value = '✓'

    botao.type = 'button'
    botao.classList = 'btnR'
    botao.value = 'X'

    textoSpan.textContent = myTask
    textoSpan.classList.add("task-text")
    tarefa.appendChild(textoSpan)
    myList.appendChild(tarefa)
    tarefa.appendChild(botao)
    tarefa.appendChild(botao2)


    botao2.addEventListener('click', () => {

        tarefa.style.border = "2px solid #20973c"

    })

    botao.addEventListener('click', () => {


        myList.removeChild(tarefa)
        myList.removeChild(botao)

    })


})
