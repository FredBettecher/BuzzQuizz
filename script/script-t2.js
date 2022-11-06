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
        </div>
        <div class="f-questao-um">
        </div>
        `;
        renderizarQuestao(questaoUm);
}

function renderizarQuestao(questaoUm){
    const questao = questaoUm.questions;

    for(let i = 0; i < questao.length; i++){
        let tituloPergunta = questao[i].title;
        console.log('Titulo da pergunta: ' + tituloPergunta)
        divQuestaoUm.innerHTML += `
            ${tituloPergunta}
            <div class="perguntas-questao">
            </div>
        `;
        
        let respostaQuestaoUm = questao[i].answers;
        for(let j = 0; j < respostaQuestaoUm.length; j++){
            let texto = respostaQuestaoUm[j].text;
            console.log(`Resposta ${j+1}: ${texto}`);
            let imagemQuestaoUm = respostaQuestaoUm[j].image;
            console.log('Imagem: ' + imagemQuestaoUm);
            let correto = respostaQuestaoUm[j].isCorrectAnswer;
            console.log('Correto? ' + correto);
        }

        
        for(let k = 0; k < nivelQuestaoUm.length; k++){
            let tituloDoNivel = nivelQuestaoUm[k].title;
            console.log(`Titulo do nivel: ${tituloDoNivel}`);
            let imagemDoNivel = nivelQuestaoUm[k].image;
            console.log(`Imagem do nivel: ${imagemDoNivel}`);
            let textoDoNivel = nivelQuestaoUm[k].text;
            console.log(`Texto do nivel: ${textoDoNivel}`);
            let pontosDoNivel = nivelQuestaoUm[k].minValue;
            console.log(`Pontos do nivel: ${pontosDoNivel}`);
        }
    }
}