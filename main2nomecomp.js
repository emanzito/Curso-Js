var nome = window.prompt('Qual é o seu nome?')

function ExibirComprimentoNome(nome) {
    var espacoCaracter = nome.indexOf(' ');
    if (espacoCaracter !== -1 && espacoCaracter < nome.length - 1) {
        var nomeCompleto = nome.substr(espacoCaracter + 1);
        document.write(`O seu nome completo tem ${nome.length} caracteres <br/>`)
    } else {
        document.write(`O seu nome tem ${nome.length} caracteres <br/>`)
    }    
}

ExibirComprimentoNome(nome);
document.write(`Em letras maiúsculas fica ${nome.toUpperCase()} <br/>`)
document.write(`E em minúsculas fica ${nome.toLowerCase()}`)


//se estiveres a roubar este código ficas a saber que és um autêntico miserável porque isto não vale nada

/*var nome = window.prompt('Qual é o teu nome?')
document.write(`Olá ${nome}! O teu nome tem ${nome.length} caracteres. <br/>`)
document.write(Em maiúsculas é ${nome.toUpperCase()} <br/>)
document.write(E em minúsculas é ${nome.toLowerCase()} <br/>)*/










