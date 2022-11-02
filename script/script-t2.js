let pegarIdQuiz = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
pegarIdQuiz.then(comparaIdQuiz);

function comparaIdQuiz(quizzes){
    let idQuiz = quizzes.data.id;
    
}