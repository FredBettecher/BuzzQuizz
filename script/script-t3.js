let parametroQuizz
//let cadastrarPergunta 
let paginaInicial = document.querySelector('.h-login')
let formularioPerguntas = []
let formularioNivel = []
//hNiveisQuiz()
//CriarQuiz()
//hFormularioQuiz()
function CriarQuiz() {

	//const paginaInicial =document.querySelector('.h-login')

	paginaInicial.innerHTML = `        <h2> Comece pelo começo </h2>
 
<ul>
    <li>
        <form action="javascript: hRetornoInputsCriacao();">
        <input class="titulo" type="text" minlength="20" maxlength="65"  placeholder="Titulo do seu quizz" required title="20 to 60 characters">
        <input class="url-quizz"type="url" placeholder="URL da imagem do seu quizz" required title=" includes URL">
        <input class="qta-perguntas" type="number" min="1" placeholder="Quantidade de perguntas do quizz"required title=" minimo number 3 ">
         <input class="qta-niveis" type="number" min="2" placeholder="Quantidade de níveis do quis" required title=" minimo number 2 ">
        <input class="parameto-pergunta" type="submit" value="Prosseguir pra criar perguntas">
    </form>
    </li> 
</ul>
`
}

function hRetornoInputsCriacao() {

	const titulo = document.querySelector('.titulo').value
	const urlQuizz = document.querySelector('.url-quizz').value
	const qtaPerguntas = document.querySelector('.qta-perguntas').value
	const qtaNiveis = document.querySelector('.qta-niveis').value
	parametroQuizz = {
		titulo: titulo,
		url: urlQuizz,
		qtaPerguntas: qtaPerguntas,
		qtaNiveis: qtaNiveis
	}

	//   if(19 < titulo.length && qtaPerguntas > 2 && qtaNiveis >1 ){

	//     console.log(titulo.length)
	console.log(parametroQuizz)
	//      hCriarQuiz()
	//CriarQuiz()
	  hFormularioQuiz()
	//   }
}



function hFormularioQuiz() {

	//  let paginaInicial =document.querySelector('.h-login')

	paginaInicial.innerHTML = ` <h2> crie suas perguntas </h2>

<form class='aqui' action="javascript: hRetornoInputsFormulario();">
`


	for (let i = 1; i <=  parametroQuizz.qtaPerguntas; i++) {
		paginaInicial = document.querySelector('.aqui')
		paginaInicial.innerHTML +=
			`
<section>   
<div class="pergunta">
<h2> pergunta ${i}</h2>
<img id="${i}"src="./imagens/edit.svg" alt="" onclick="ocultar(this)">
</div>
<div class="secao">

<input class="texto-pergunta${i}" type="text" minlength="20" placeholder="Texto da pergunta" required title="Sua pergunda deve ter no mínimo 20 letras">
<input class="cor-fundo${i}"type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{6})$" requered title="começar em #, seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F">

<h2 class="correta">Resposta correta</h2>

<input class="resposta${i}-correta" type="text" minlength="20" maxlength="65"  placeholder="Resposta correta" required title="20 to 60 characters">
<input class="resposta${i}url"type="url" placeholder="URL da imagem" required title=" includes URL">

<h2 class="incorreta">Respostas incorretas</h2>

<input class="resposta${i}-incorreta" type="text" minlength="1"   placeholder="Resposta incorreta 1" required title="campo não pode ser vazio">
<input class="resposta${i}url1"type="url" placeholder="URL da imagem 1" required title=" includes URL">

<input class="resposta${i}-incorreta2" type="text" minlength="1"   placeholder="Resposta incorreta 2" required title="campo não pode ser vazio">
<input class="resposta${i}url2"type="url" placeholder="URL da imagem 2" required title=" includes URL">

., <input class="resposta${i}-incorreta3" type="text" minlength="1"   placeholder="Resposta incorreta 3" required title="campo não pode ser vazio">
<input class="resposta${i}url3"type="url" placeholder="URL da imagem 3 " required title=" includes URL">
</div>

</section>
`
	}

	paginaInicial.innerHTML +=
		`
<input class="criar-pergunta" type="submit" value="Prosseguir pra criar níveis">

</form>
`
}


function hNiveisQuiz() {

	paginaInicial = document.querySelector('.h-login')

	paginaInicial.innerHTML = ` <h2> Agora, decida os níveis!</h2>
	
	<form action="javascript: hRetornaInputsNiveis();"  class='aqui'>
	`

	for (let i = 1; i <= parametroQuizz.qtaNiveis; i++) {
		paginaInicial = document.querySelector('.aqui')
		paginaInicial.innerHTML +=
			`
	 <section>   
	<div class="pergunta">
	<h2> Nível ${i}</h2>
	<img src="./imagens/edit.svg" alt="" onclick="ocultar(this)">
	</div>
	<div class="niveis">
	
	<input class="texto-pergunta${i}" type="text" minlength="10" placeholder="titulo do nível" required title="Inclua um titulo com no minimo 10 letras">
	<input class="porcentagem-acerto${i}" type="number" min="0" max="100" placeholder="% de acerto mínima" required title="informe um numero de 0 a 100">
	<input class="url-nivel${i}" type="url" placeholder="URL da imagem do nível" required title=" digite uma URL valida">
	< class="text-area descricao-nivel${i}" type="text" minlength="30" placeholder="Descrição do nível" required title=" Inclua uma descrição com no minimo 30 letras">
	</div>
	
	</section>
	`
	
	}

	paginaInicial.innerHTML +=
		`
	<input class="finalizar-quizz" type="submit" value="Finalizar Quizz">	
	</form>
	`
}


function hSucessoQuizz(){
	paginaInicial = document.querySelector('.h-login')

	paginaInicial.innerHTML = ` <h2> Seu quizz está pronto!</h2>

	<div id="${item.id}" onclick="SelecionarQuiz(this)" class="gradiente tamanho-imagem" 
                    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${item.image});width: 340px;
                    height: 181px;">
                    ${item.title} 
                </div>

	<buttom class="h-sucesso-quizz"onclick=""> Acessar Quizz </buttom>
	<p onclick="" > Voltar pra home </p>
`
}


function hRetornaInputsNiveis(){
	
	for(let i=1 ; i <= parametroQuizz.qtaNiveis; i++){
	
		const tituloNivel = document.querySelector(`.texto-pergunta${i}`).value
	const porcentagemNivel = document.querySelector(`.porcentagem-acerto${i}`).value
	const urlNivel = document.querySelector(`.url-nivel${i}`).value
	const descricaoNivel = document.querySelector(`.descricao-nivel${i}`).value 


	formularioNivel.push(
		{
			levels : [ 
			{
			title: tituloNivel,
			image: urlNivel,
			text: descricaoNivel,
			minValue: porcentagemNivel	
			}
				]
		}
		)
	}

	console.log(parametroQuizz)
	console.log(formularioPerguntas)
	console.log(formularioNivel)

	hSucessoQuizz()
}

function hRetornoInputsFormulario() {

for(let i=1; i <= parametroQuizz.qtaPerguntas; i++ ){

	let title = document.querySelector(`.texto-pergunta${i}`).value
	let color = document.querySelector(`.cor-fundo${i}`).value
	let respostaCorreta = document.querySelector(`.resposta${i}-correta`).value
	let url = document.querySelector(`.resposta${i}url`).value
	let respostaInorreta = document.querySelector(`.resposta${i}-incorreta`).value
	let url1 = document.querySelector(`.resposta${i}url1`).value
	let respostaIncorreta2 = document.querySelector(`.resposta${i}-incorreta2`).value
	let url2 = document.querySelector(`.resposta${i}url2`).value
	let respostaIncorreta3 = document.querySelector(`.resposta${i}-incorreta3`).value
	let url3 = document.querySelector(`.resposta${i}url3`).value


	formularioPerguntas.push(
	{
		title: title,
		color: color,
				answers: [
					{
						text: respostaCorreta,
					image: url,
						isCorrectAnswer: true
	}
	,
	{
			text: respostaInorreta,
			image: url1,
			isCorrectAnswer: false
		},
		{
			text: respostaIncorreta2,
			image: url2,
			isCorrectAnswer: false
		},
		{
			text: respostaIncorreta3,
			image: url3,
			isCorrectAnswer: false
		}

			]

		})

	}


	console.log(parametroQuizz)
	console.log(formularioPerguntas)

	hNiveisQuiz()


}


function ocultar(clicou) {

	const teste2 = document.querySelector(".secao")

	teste2.classList.toggle('ocultar')


	//let list = document.querySelector('.secao2')
	//	list.classList.toggle('ocultar');

}
