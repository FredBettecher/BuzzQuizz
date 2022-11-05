let parametroQuizz
//let cadastrarPergunta 
let paginaInicial =document.querySelector('.h-login')
let formularioPerguntas =[]
let formularioNivel =[]

//hCriarQuiz()
//hFormularioQuiz()
function CriarQuiz(){

//const paginaInicial =document.querySelector('.h-login')

paginaInicial.innerHTML =`        <h2> Comece pelo começo </h2>
 
<ul>
    <li>
        <form action="javascript: hReceberValores();">
        <input class="titulo" type="text" minlength="20" maxlength="65"  placeholder="Titulo do seu quizz" required title="20 to 60 characters">
        <input class="url-quizz"type="url" placeholder="URL da imagem do seu quizz" required title=" includes URL">
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
const urlQuizz =document.querySelector('.url').value
const qtaPerguntas =document.querySelector('.qta-perguntas').value
const qtaNiveis =document.querySelector('.qta-niveis').value
parametroQuizz = {titulo:titulo ,
    url:urlQuizz, 
//qtaPerguntas:qtaPerguntas,
  //  qtaNiveis:qtaNiveis
}

//    if(19 < titulo.length && qtaPerguntas > 2 && qtaNiveis >1 ){

        console.log(titulo.length)
        console.log(parametroQuizz)
        //hCriarQuiz()
		CriarQuiz()
        hFormularioQuiz()
//       }
}

 

function hFormularioQuiz(){

  //  let paginaInicial =document.querySelector('.h-login')
   
paginaInicial.innerHTML =` <h2> crie suas perguntas </h2>

<form action="javascript: hNiveisQuiz();"  class='aqui'>

`


for(let i=1; i <= parametroQuizz.qtaPerguntas; i++){
    paginaInicial =document.querySelector('.aqui')
    paginaInicial.innerHTML+=
    `
<section>   
<div class="pergunta">
<h2> pergunta ${i}</h2>
<img id="${i}"src="./imagens/edit.svg" alt="" onclick="ocultar(this)">
</div>
<div class="secao">

<input class="texto-pergunta${i}" type="text" minlength="20" placeholder="Texto da pergunta" required title="Sua pergunda deve ter no mínimo 20 letras">
<input class="cor-fundo"type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{6})$" title="começar em #, seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F">

<h2 class="correta">Resposta correta</h2>

<input class="resposta-correta" type="text" minlength="20" maxlength="65"  placeholder="Resposta correta" required title="20 to 60 characters">
<input class="url"type="url" placeholder="URL da imagem" required title=" includes URL">

<h2 class="incorreta">Respostas incorretas</h2>

<input class="resposta-incorreta" type="text" minlength="1"   placeholder="Resposta incorreta 1" required title="campo não pode ser vazio">
<input class="url"type="url1" placeholder="URL da imagem 1" required title=" includes URL">

<input class="resposta-incorreta2" type="text" minlength="1"   placeholder="Resposta incorreta 2" required title="campo não pode ser vazio">
<input class="url"type="url2" placeholder="URL da imagem 2" required title=" includes URL">

., <input class="resposta-incorreta3" type="text" minlength="1"   placeholder="Resposta incorreta 3" required title="campo não pode ser vazio">
<input class="url"type="url3" placeholder="URL da imagem 3 " required title=" includes URL">
</div>

</section>
` 
}

paginaInicial.innerHTML+=
`
<input class="criar-pergunta" type="submit" value="Prosseguir pra criar níveis">

</form>
`

formularioPerguntas =questions
	[
		{
		title:textoPergunta,
		color: cor,
		answers: [
			{
				text: respostaCorreta,
				image: url,
				isCorrectAnswer: true
			},
			{
				text: respostaInorreta,
				image: url,
				isCorrectAnswer: false
			}

		]

		}
	]


const textoPergunta =document.querySelector('.texto-pergunta').value
const cor =document.querySelector('.cor-fundo').value
const respostaCorreta =document.querySelector('.resposta-correta').value
const url =document.querySelector('.url1').value
const respostaInorreta =document.querySelector('.resposta-incorreta').value
//const url1 =document.querySelector('.url1').value
//const respostaCorreta2 =document.querySelector('.resposta-incorreta2').value
//const url2 =document.querySelector('.url2').value
//const respostaCorreta3 =document.querySelector('.resposta-incorreta3').value
//const url3 =document.querySelector('.url3').value

}

function hNiveisQuiz(){

	//let paginaInicial =document.querySelector('.h-login')
   
	paginaInicial.innerHTML =` <h2> Agora, decida os níveis!</h2>
	
	<form action="javascript: gerarPerguntas();"  class='aqui'>
	`	

	for(let i=1; i <= parametroQuizz.qtaNiveis; i++){
		paginaInicial =document.querySelector('.aqui')
		paginaInicial.innerHTML+=
		`
	 <section>   
	<div class="pergunta">
	<h2> Nível ${i}</h2>
	<img src="./imagens/edit.svg" alt="" onclick="ocultar(this)">
	</div>
	<div class="pergunta">
	
	<input class="texto-pergunta${i}" type="text" minlength="10" placeholder="titulo do nível" required title="Inclua um titulo com no minimo 10 letras">
	<input class="porcentagemAcerto" type="number" minlength="0" maxlength="100" placeholder="% de acerto mínima" required title="informe um numero de 0 a 100">
	<input class="urlNivel"type="url" placeholder="URL da imagem do nível" required title=" digite uma URL valida">
	<input class="descricaoNivel" type="text" minlength="30" placeholder="Descrição do nível" required title="Inclua uma descrição com no minimo 30 letras>
	</div>
	</div>
	</section>
	` 
	}

	paginaInicial.innerHTML+=
	`
	<input class="finalizar-quizz" type="submit" value="Finalizar Quizz">	
	</form>
	`

const tituloNivel = document.querySelector("`texto-pergunta${i}`").value
const porcentagemNivel = document.querySelector("porcentagemAcerto").value
const urlNivel = document.querySelector("urlNivel").value
const descricaoNivel = document.querySelector("descricaoNivel").value

formularioNivel = 
levels
	[{
		title: tituloNivel,
		image: urlNivel,
		text: descricaoNivel,
		minValue: porcentagemNivel
	}
	]
}

function valor(){

      console.log(parametroQuizz)
}


function ocultar(clicou){

const teste2 = document.querySelector(".secao")

	teste2.classList.toggle('ocultar')


	//let list = document.querySelector('.secao2')
//	list.classList.toggle('ocultar');

}

/* tentativas para modelo de envio de formulario 


let post =
{title: parametroQuizz.titulo,
	image: parametroQuizz.urlQuizz,
	questions:
	[
		{
		title:textoPergunta,
		color: cor,
		answers: [
			{
				text: respostaCorreta,
				image: url,
				isCorrectAnswer: true
			},
			{
				text: respostaInorreta,
				image: url,
				isCorrectAnswer: false
			}

		]


		}
	],
	levels: [
		{
			title: tituloNivel,
			image: urlNivel,
			text: descricaoNivel,
			minValue: porcentagemNivel
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}
//oculta.classList.contains('ocultar')
//oculta.classList.add('ocultar')
//console.log(clicou)
//teste.classList.add('ocultar')
//teste.classList.contains('ocultar')
//teste.classList.remove('ocultar')



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


