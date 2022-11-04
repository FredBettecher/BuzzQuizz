let parametroQuizz
let cadastrarPergunta
//hCriarQuiz()
hFormularioQuiz()

function hCriarQuiz(){

const paginaInicial =document.querySelector('.h-login')

paginaInicial.innerHTML =`        <h2> Comece pelo começo </h2>

<ul>
    <li>
        <form action="javascript: hReceberValores();">
        <input class="titulo" type="text" minlength="20" maxlength="65"  placeholder="Titulo do seu quizz" required title="20 to 60 characters">
        <input class="url"type="url" placeholder="URL da imagem do seu quizz" required title=" includes URL">
        <input class="qta-perguntas" type="number" min="3" placeholder="Quantidade de perguntas do quizz"required title=" minimo number 3 ">
        <input class="qta-niveis" type="number" min="2" placeholder="Quantidade de níveis do quis" required title=" minimo number 2 ">
        <input class="parameto-pergunta" type="submit" value="Prosseguir pra criar perguntas">
    </form>
    </li> 
</ul>
`    
}




function hReceberValores(){

const titulo =document.querySelector('.titulo').value
const url =document.querySelector('.url').value
const qtaPerguntas =document.querySelector('.qta-perguntas').value
const qtaNiveis =document.querySelector('.qta-niveis').value
parametroQuizz = {titulo:titulo ,
    url:url, 
    qtaPerguntas:qtaPerguntas,
    qtaNiveis:qtaNiveis}

    if(19 < titulo.length && qtaPerguntas > 2 && qtaNiveis >1 ){
        console.log(titulo.length)
        console.log(parametroQuizz)
        hCriarQuiz()
        hFormularioQuiz()
       }
}



function hFormularioQuiz(){

    let paginaInicial =document.querySelector('.h-login')
   
paginaInicial.innerHTML =` <h2> crie suas perguntas </h2>

<form action="javascript: gerarPerguntas();"  class='aqui'>

`
for(let i=1; i <= 1 /*parametroQuizz.qtaPerguntas*/; i++){
    paginaInicial =document.querySelector('.aqui')
    paginaInicial.innerHTML+=
    `
 <section>   
<div class="pergunta">
<h2> pergunta ${i}</h2>
<img src="./imagens/edit.svg" alt="" onclick="ocultar(this)">
</div>
<div class="h.tela3">

<input class="txtPergunta${i}" type="text" minlength="20" placeholder="Texto da pergunta" required title="Sua pergunda deve ter no mínimo 20 letras">
<input class="corFundo"type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{6})$" title="começar em #, seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F">

<h2 class="correta">Resposta correta</h2>
<input class="respostaCorreta" type="text" minlength="20" maxlength="65"  placeholder="Resposta correta" required title="20 to 60 characters">
<input class="urlCOrreta"type="url" placeholder="URL da imagem" required title=" includes URL">
<h2 class="incorreta">Respostas incorretas</h2>
<input class="respostaCorreta" type="text" minlength="1"   placeholder="Resposta incorreta 1" required title="campo não pode ser vazio">
<input class="urlCOrreta"type="url" placeholder="URL da imagem 1" required title=" includes URL">

<input class="respostaCorreta" type="text" minlength="1"   placeholder="Resposta incorreta 2" required title="campo não pode ser vazio">
<input class="urlCOrreta"type="url" placeholder="URL da imagem 2" required title=" includes URL">

<input class="respostaCorreta" type="text" minlength="1"   placeholder="Resposta incorreta 3" required title="campo não pode ser vazio">
<input class="urlCOrreta"type="url" placeholder="URL da imagem 3 " required title=" includes URL">
</div>
</div>
</section>
` 
}

paginaInicial =document.querySelectorAll('.aqui')






paginaInicial.innerHTML+=
`
<input class="criar-pergunta" type="submit" value="Prosseguir pra criar níveis">

</form>


`
}
//cor.lastChild.classList.add.('teste')
  //  console.log(login.titulo)


function gerarPerguntas(){


}

function valor(){

    console.log(parametroQuizz)
}
/*function checkUrl(url) {
    try {
        
     let ur = new URL(url)
     return proximaTela()
     console.log("Valid URL!")
    } 
    
    
    catch(err) {
       console.log("Invalid URL!")
   }

 }

*/
function ocultar(){

    const promise=axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')


document.querySelector()
}


/*
let test=
{
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}
*/


