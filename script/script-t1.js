
ObterQuizzes()

//function CriarQuizz() {

//}


function SelecionarQuiz(Quizzes) {
console.log(Quizzes.id)
//     let div = document.getElementById('${item.id}');
//     div.classList.add("escondido");

//     console.log('${item.id}')

 }

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

        let item = Quizzes[i];
        lista.innerHTML +=
            `
                    <div onclick="SelecionarQuiz(this)" id="${item.id}" class="gradiente tamanho-imagem" 
                        style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
                        rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${item.image});width: 340px;
                        height: 181px;">
                        ${item.title} 
                    </div>
                `;
    }

    //}
}
// function SelecionarQuiz() {

//     let div = document.getElementById('${item.id}');
//     div.classList.add("escondido");

//     console.log('${item.id}')

// }