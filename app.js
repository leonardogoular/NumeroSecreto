let listaDeNumeroorteados = [];
let numerolimete =10;
let tentativas = 1; // controla a escrita de tentativa no singular ou no plural 
let numeroSecreto = gerarNumeroAleatorio();
function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
exibirTextoInivial();
function verificarChute(){
    let chute =document.querySelector('input').value;
    if(chute==numeroSecreto){
        let palavraTentativa = tentativas > 1 ?'tentativa' : 'tentativa';
        let messagemTentativa = `você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1','acertou o numero');
        exibirTextoNaTela('p',messagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else{
            if(chute>numeroSecreto){
                exibirTextoNaTela('p','número é menor');
            }
            else{
                exibirTextoNaTela('p','número é maior');
            }
            }
            tentativas++;
            limparCampo();
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numerolimete+1);
    let quantiddadeDeElementoNaLista = listaDeNumeroorteados.length;
    if(quantiddadeDeElementoNaLista == numerolimete){
        listaDeNumeroorteados = [];
    }
    if(listaDeNumeroorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroorteados.push(numeroEscolhido);
        return numeroEscolhido;;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}
function reniciarJogo(){
            numeroSecreto = gerarNumeroAleatorio();
            limparCampo();
            tentativas = 1;
            exibirTextoInivial();
            document.querySelector('reiniciar').setAttribute('disabled',true);
}
function exibirTextoInivial(){
    exibirTextoNaTela('h1','jogo do número secrerto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
}