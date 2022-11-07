let x = '';
let y = '';
let z = '';
let arrayQ = [17655, 17654, 17653, 17652, 1473983];  // array quizz vindo do servidor 
let element1 = 0;
let element2 = 0;
let item = [];
let array = [];
let arrayQui = [];
let arrayQuo = [];
let newArray = [];  // novo array 
obterQuizzes();
mudarEstado(x, y, z); // mudar da tela quando o usuário já tem quizz cadastrado 

function mudarEstado(x, y, z) {
    //console.log(arrayQ.length)
    if (arrayQ.length > 0) {
        y = document.getElementById('y').style.display = "none";

    } else {
        x = document.getElementById('x').style.display = "none";
        z = document.getElementById('z').style.display = "none";
    }
}

function criarQuizz() {

    //   console.log(element1,element2)
    element1 = document.getElementById("z").innerHTML // sinal de mais 
    element2 = document.getElementById("w").innerHTML // nome
    if (element1 != 0 || element2 != 0) {
        const ocultarTelaUm = document.querySelector('.e-tela1').style.display = "none";
        CriarQuiz()// chamar função de criar quizz h-tela3 3.1
    }
}

function obterQuizzes() {

    //  mandar uma requisição GET para a URL, para buscar os quizzes do servidor
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    // resposta do servidor
    promessa.then(respostaChegou); // agendando para a função respostaChegou ser executada quando a resposta 
    //do servidor chegar

    function respostaChegou(resposta) { // tratar sucesso
        console.log(resposta.data);  // é o array da resposta
        quizzes = resposta.data;
        //renderizar as mensagens vindas do servidor
        renderizarSeusQuizzes(quizzes)
        renderizarTodosQuizzes(quizzes);
    }
}

function renderizarSeusQuizzes(quizzes) {
    
    //if (item.id === " ") {   // mostrar quizz criados pelo o usuario

    for (let i = 0; i < quizzes.length; i++) {
        item = quizzes[i];
        console.log(item); 
        arrayQui.push(item.id);
        const newArray = arrayQui.filter(numero => arrayQ.includes(numero))
        //console.log("Quizz criado pelo usuári0: ", newArray)

        console.log(arraQui.filter(x => x.id === newArray)); // objeto com id 2
        const lista = document.getElementById('x');
        lista.innerHTML = '';
        for (let j = 0; j < newArray.length; j++) {

            // var arr = [
            //     {'id': 1, 'nome': 'Matheus'},
            //     {'id': 2, 'nome': 'Pedro'},
            //     {'id': 3, 'nome': 'João'}
            //   ];
            
            lista.innerHTML +=
                `
                <div id=${item.id} onclick="SelecionarQuiz(this)" class="gradiente tamanho-imagem" 
                    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${item.image});width: 340px;
                    height: 181px;">
                    ${item.title} 
                </div>
            `;
        }
    }

}
// a função renderizarLista atualiza os quizzes na tela
function renderizarTodosQuizzes(quizzes) {
    const lista = document.getElementById('todosQuizzes')
    //if (item.id === " ") {

    lista.innerHTML = '';

    for (let i = 0; i < quizzes.length; i++) {

        item = quizzes[i];
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

// integração com tela 2
// funciona para todos os quizzes
function SelecionarQuiz(quizzes) {
    console.log(quizzes.id);
    let id = quizzes.id
    const quizzPromise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + id);
    quizzPromise.then(respostaSelecionarQuizz);
    const ocultarTelaUm = document.querySelector('.e-tela1').style.display = "none";
}


