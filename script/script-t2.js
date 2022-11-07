function SelecionarQuiz(quizzes){
    console.log(quizzes.id);
    let id = quizzes.id
    const quizzPromise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);
    quizzPromise.then(respostaSelecionarQuizz);
    const ocultarTelaUm = document.querySelector('.e-tela1').style.display = "none";
}

function respostaSelecionarQuizz(varUnicoQuizz){
    console.log(varUnicoQuizz.data);
    let quizz = varUnicoQuizz.data;
    renderizarUnicoQuizz(quizz);
}


function renderizarUnicoQuizz(quizz) {
    const unicoQuizz = document.getElementById('unicoQuizz');
    unicoQuizz.innerHTML = '';
    unicoQuizz.innerHTML +=
        `<div class="f-gradiente" id="${quizz.id}" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.57),
            rgba(0, 0, 0, 0.57)), url(${quizz.image});">
            ${quizz.title}
            <div class="f-questao-um">
            </div>
        </div>
        `;
        renderizarQuestao(questaoUm);
}

function renderizarQuestao(questaoUm){
    const questao = questaoUm.questions;
    console.log(questao);
    for(let i = 0; i < questao.length; i++){
        let tituloPergunta = questao[i].title;
        console.log('Titulo da pergunta: ' + tituloPergunta);
        let cor = questao[i].color;
        console.log('cor: ' + cor);
        divQuestaoUm.innerHTML += `
                <div class="f-titulo-pergunta" style="background-color: ${cor}">
                ${tituloPergunta}
                </div>
                <div class="f-caixa-separadora-maior resposta-${i}">
                </div>

        `;
        
        let caixaSeparadoraMaior = document.querySelector(`.resposta-${i}`);
        let respostaQuestaoUm = questao[i].answers;
        for(let j = 0; j < respostaQuestaoUm.length; j++){
            let textoQuestao = respostaQuestaoUm[j].text;
            console.log(`Resposta ${j+1}: ${textoQuestao}`);
            let imagemQuestaoUm = respostaQuestaoUm[j].image;
            console.log('Imagem: ' + imagemQuestaoUm);
            let correto = respostaQuestaoUm[j].isCorrectAnswer;
            console.log('Correto? ' + correto);

            caixaSeparadoraMaior.innerHTML += `
                <div class="f-caixa-separadora-menor" onclick="selecionarResposta(this)">
                    <div class="f-perguntas-questao-imagem">
                        <img src="${imagemQuestaoUm}" class="f-imagens-perguntas">
                    </div>
                    <div class="f-perguntas-questao-texto">
                        ${textoQuestao}
                    </div>
                </div>
                `;
        }
        
        for(let k = 0; k < nivelQuestao.length; k++){
            let tituloDoNivel = nivelQuestao[k].title;
            console.log(`Titulo do nivel: ${tituloDoNivel}`);
            let imagemDoNivel = nivelQuestao[k].image;
            console.log(`Imagem do nivel: ${imagemDoNivel}`);
            let textoDoNivel = nivelQuestao[k].text;
            console.log(`Texto do nivel: ${textoDoNivel}`);
            let pontosDoNivel = nivelQuestao[k].minValue;
            console.log(`Pontos do nivel: ${pontosDoNivel}`);
        }
    }
}