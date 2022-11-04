function SelecionarQuiz(Quizzes){
    console.log(Quizzes.id);
    let id = Quizzes.id
    let quizId = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);
    quizId.then(respostaSelecionarQuizz);
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
        `
                <div id="${quizz.id}" onclick="SelecionarQuiz(this)" class="gradiente tamanho-imagem" 
                    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${quizz.image});width: 340px;
                    height: 181px;">
                    ${quizz.title}
                </div>
            `;
}