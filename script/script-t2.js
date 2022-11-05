function SelecionarQuiz(Quizzes){
    console.log(Quizzes.id);
    let id = Quizzes.id
    const quizzPromise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);
    quizzPromise.then(respostaSelecionarQuizz);
    const ocultarTelaUm = document.querySelector('.e-tela1');
    ocultarTelaUm.classList.add("ocultar");
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
        const titulo = questao[i].titulo;
        console.log(titulo);
        let que
    }
}