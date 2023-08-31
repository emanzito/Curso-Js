var a = window.document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)


function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar () {    
    a.innerText = 'Entrou!'
}
function sair () {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}












var n = window.prompt('escreva um número')


function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

/*let res = parimp(n) 
console.log(res)*/

//ou no caso de usar janela de alerta

window.alert(`O número que escolheu é ${n} e é ${parimp(n)}`); 





