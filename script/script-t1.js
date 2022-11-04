ObterQuizzes()

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

// // a função renderizarLista atualiza as mensagens na tela a cada 3 segundos
function renderizarTodosQuizzes(Quizzes) {

    const lista = document.getElementById('TodosQuizzes');

    lista.innerHTML = '';
    
    for (let i = 0; i < Quizzes.length; i++) {

        let item = Quizzes[i];
        lista.innerHTML += `
            <li class="tamanho-imagem">
                <div onclick="SelecionarQuiz(this)" class="li-gradiente" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${item.image});width: 340px;
                height: 181px;">
                    ${item.title}
                </div>
            </li>
        `;
    }
}

function SelecionarQuiz(){
    console.log(item);
    let idQuizz = item.data.id;
    console.log(idQuizz);
}