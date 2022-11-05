// Função usada no botão que vai renderizar o quizz clicado
function SelecionarQuiz(Quizzes){
    console.log(Quizzes.id);
    let id = Quizzes.id
    const quizzPromise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);
    quizzPromise.then(respostaSelecionarQuizz);
    const ocultarTelaUm = document.querySelector('.e-tela1');
    ocultarTelaUm.classList.add("ocultar");
}

// Resposta do servidor para o clique do botão
function respostaSelecionarQuizz(varUnicoQuizz){
    console.log(varUnicoQuizz.data);
    let quizz = varUnicoQuizz.data;
    renderizarUnicoQuizz(quizz);
}

// Função que vai renderizar o quizz clicado
function renderizarUnicoQuizz(quizz) {
    const unicoQuizz = document.getElementById('unicoQuizz');
    unicoQuizz.innerHTML = '';
    unicoQuizz.innerHTML +=
        `<div class="f-gradiente" id="${quizz.id}" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.57),
            rgba(0, 0, 0, 0.57)), url(${quizz.image}); color: ${quizz.color};">
            ${quizz.title}
            <div class="f-questao-um">
            </div>
        </div>
        `;
        renderizarQuestao(quizz);
}

// A função abaixo vai renderizar as questões do quizz clicado
// As variáveis ficaram como questaoUm porque eu pensei que teria que fazer uma função pra cada questão
// porém eu percebi que elas estão todas contidas num array. Eu tentei mudar, mas começaram a aparecer
// alguns bugs, então decidi deixar assim mesmo. Mas é só lembrar que isso pega as questões dos quizzes
// e renderiza elas
function renderizarQuestao(questaoUm){
    let divQuestaoUm = document.querySelector('.f-questao-um');
    divQuestaoUm.innerHTML = '';

    const nivelQuestaoUm = questaoUm.levels;
    const questao = questaoUm.questions;
    
    for(let i = 0; i < questao.length; i++){
        let tituloPergunta = questao[i].title;
        console.log('Titulo da pergunta: ' + tituloPergunta)
        divQuestaoUm.innerHTML += `
            
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