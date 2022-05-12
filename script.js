let tarefaAtual = document.getElementById('tarefa')

function tarefaM (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function criarItem(){

    const novoItem = document.createElement('label')
    novoItem.classList.add('tarefas')
    novoItem.setAttribute('for', String(tarefaAtual.value))

    const check = document.createElement('input')
    check.classList.add('tarefas')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('name', String(tarefaAtual.value))

    let listaTarefas = document.getElementById('res').appendChild(novoItem)
    listaTarefas.appendChild(check);

    const bloco = document.createElement('div')
    bloco.textContent = tarefaM(tarefaAtual.value);
    novoItem.appendChild(bloco)

    const remove = document.createElement('input')
    remove.classList.add('tarefas')
    remove.setAttribute('type', 'button')
    remove.value = 'X'
    bloco.appendChild(remove)


 
    remove.onclick = function() {
        apagar()
    };


    function apagar() {
        listaTarefas.removeChild(bloco)
        listaTarefas.removeChild(check)
        listaTarefas.removeChild(remove)
    }

    tarefaAtual.focus();

}

function adicionar(){
    if (tarefaAtual.value.length == 0){
        window.alert('Por favor, insira um dado válido')
    } else{
        criarItem();
        tarefaAtual.value = ''
    }

}
