const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce acha a agricultura importante para a economia? "
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "A agricultura é importante para a economia pois pela sua exportação muito forte, torna-se uma potencia muito eficiente para a economia."
            },
            {
                texto: "Não!",
                afirmacao: "A mudança climatica pode acabar afetano o cultivo."
            }
        ]
},
