let tarefaAtual = document.getElementById('tarefa')

function tarefaM (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function criarItem(){

//          criando label para poder acessar input e div 
    const novoItem = document.createElement('label')
    novoItem.classList.add('tarefas')
    novoItem.setAttribute('for', String(tarefaAtual.value))

//          criando input checkbox e alterando seus atributos
    const check = document.createElement('input')
    check.classList.add('tarefas')
    check.setAttribute('type', 'checkbox')
    check.setAttribute('name', String(tarefaAtual.value))

//          selecionando lista de tarefas e atualizando a mesma
    let listaTarefas = document.getElementById('res').appendChild(novoItem)
    listaTarefas.appendChild(check);

//          criando div do texto
    const bloco = document.createElement('div')
    bloco.textContent = tarefaM(tarefaAtual.value);
    novoItem.appendChild(bloco)

//          criando botão para remover itens
    const remove = document.createElement('input')
    remove.classList.add('tarefas')
    remove.setAttribute('type', 'button')
    remove.value = 'X'
    bloco.appendChild(remove)


    // Função para remover os itens
    remove.onclick = function() {apagar()};


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
