const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha a agricultura importante para a economia?"
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "A agricultura é importante para a economia por ser uma das principais formas de sustentação do país com sua exportação. "
            },
            {
                texto: "Não!",
                afirmacao: "Com a mudança climática sendo muito forte pode acabar afetando o meio ambiente, criando dificuldades nessa area. "
            }
        ]
},