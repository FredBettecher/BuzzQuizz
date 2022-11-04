let x = '';
let y = '';
let z = '';
let arrayQ = [1,2,1,5,6]; //pegar array da tela de criação
let item = [];

ObterQuizzes()
Mudarestado(x,y,z)

function Mudarestado(x,y,z) {
    
    console.log(arrayQ.length)
    if (arrayQ.length > 0) {
        y = document.getElementById('y').style.display = "none";
        
    } else {
        x = document.getElementById('x').style.display = "none";
        z = document.getElementById('z').style.display = "none";
    }
}

// function SelecionarQuiz(Quizzes) {
//     console.log(Quizzes.id)
// }

function ObterQuizzes() {

    //  mandar uma requisição GET para a URL, para buscar os quizzes do servidor
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    // resposta do servidor
    promessa.then(respostaChegou); // agendando para a função respostaChegou ser executada quando a resposta 
    //do servidor chegar

    function respostaChegou(resposta) { // tratar sucesso
        console.log(resposta.data);  // é o array da resposta
        Quizzes = resposta.data;
        //renderizar as mensagens vindas do servidor
        renderizarTodosQuizzes(Quizzes);
    }
}

// a função renderizarLista atualiza os quizzes na tela
//Na Tela 1: Lista de Quizzes, você pode comparar o id dos quizzes vindo do servidor
//com esses ids armazenados na criação dos quizzes para verificar se um determinado quizz 
// foi criado pelo usuário em questão
function renderizarTodosQuizzes(Quizzes) {
    const lista = document.getElementById('TodosQuizzes');
    // id criado na tela 3 
    //if (item.id === " ") {

    lista.innerHTML = '';

    for (let i = 0; i < Quizzes.length; i++) {

        item = Quizzes[i];
        lista.innerHTML +=
            `
                <div id="${item.id}" onclick="SelecionarQuiz(this)" class="gradiente tamanho-imagem" 
                    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${item.image});width: 340px;
                    height: 181px;">
                    ${item.title} 
                </div>
            `;
    }
    //}
}

