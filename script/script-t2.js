const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
promise.then(resposta)

const arrayQuizz = [];
function resposta(res){
    let listaQuizz = res.data;
    for(let i = 0; i < listaQuizz.length; i++){
        arrayQuizz.push(listaQuizz[i].id);
    }
    console.log(arrayQuizz);
}


function SelecionarQuiz(Quizzes){
    console.log(Quizzes.id);
}

// const idDoQuizz = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/');
// idDoQuizz.then(abrirQuiz);


// function SelecionarQuiz(){
//     console.log(item);
//     let idQuizz = item.data.id;
//     console.log(idQuizz);
// }