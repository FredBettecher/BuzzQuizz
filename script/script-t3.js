let parametroQuizz
let paginaInicial = document.querySelector('.h-login')
let formularioPerguntas = []
let formularioNivel = []
let envioQuizz
let meuPost =[]
let lista
function hCriarQuizz() {

	paginaInicial.innerHTML = `        <h2> Comece pelo começo </h2>
 
<ul>
    <li>
        <form action="javascript: hRetornoInputsCriacao();">
        <input class="titulo" type="text" minlength="20" maxlength="65"  placeholder="Titulo do seu quizz" required title="Seu titulo deve possuir de 20 a 65 letras">
        <input class="url-quizz"type="url" placeholder="URL da imagem do seu quizz" required title="Confirme a URL, esta não é valida">
        <input class="qta-perguntas" type="number" min="3" placeholder="Quantidade de perguntas do quizz"required title="Este campo deve ser igual ou maior que 3 ">
         <input class="qta-niveis" type="number" min="2" placeholder="Quantidade de níveis do quis" required title="Este campo deve ser igual ou maior que 2 ">
        <input class="parameto-pergunta" type="submit" value="Prosseguir pra criar perguntas">
    </form>
    </li> 
</ul>
`
}

function hRetornoInputsCriacao() {

	const title = document.querySelector('.titulo').value
	const image = document.querySelector('.url-quizz').value
	const qtaPerguntas = document.querySelector('.qta-perguntas').value
	const qtaNiveis = document.querySelector('.qta-niveis').value
	parametroQuizz = {
			title: title,
			image: image,
		qtaPerguntas: qtaPerguntas,
		qtaNiveis: qtaNiveis
	}
	hFormularioQuiz()
}


function hFormularioQuiz() {

	paginaInicial.innerHTML = ` <h2> crie suas perguntas </h2>

<form class='aqui' action="javascript: hRetornoInputsFormulario();">
`

	for (let i = 1; i <= parametroQuizz.qtaPerguntas; i++) {
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
<input class="cor-fundo${i}"type="text" placeholder="Cor de fundo da pergunta" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{6})$" required title="começar em #, seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F">

<h2 class="correta">Resposta correta</h2>

<input class="resposta${i}-correta" type="text" minlength="1"   placeholder="Resposta correta" required title="Escreve a resposta correta da pergunta que acabou de criar">
<input class="resposta${i}url"type="url" placeholder="URL da imagem" required title=" Confirme a URL, esta não é valida">

<h2 class="incorreta">Respostas incorretas</h2>

<input class="resposta${i}-incorreta" type="text" minlength="1"   placeholder="Resposta incorreta 1" required title="Campo não pode ser vazio, escreva uma resposta errada">
<input class="resposta${i}url1"type="url" placeholder="URL da imagem 1" required title=" Confirme a URL, esta não é valida">

<input class="resposta${i}-incorreta2" type="text" minlength="1"   placeholder="Resposta incorreta 2" title="Campo não pode ser vazio">
<input class="resposta${i}url2"type="url" placeholder="URL da imagem 2" title=" Confirme a URL, esta não é valida">

., <input class="resposta${i}-incorreta3" type="text" minlength="1"   placeholder="Resposta incorreta 3" title="Campo não pode ser vazio">
<input class="resposta${i}url3"type="url" placeholder="URL da imagem 3 " title="Confirme a URL, esta não é valida">
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
	
	<input class="texto-pergunta${i}" type="text" minlength="10" placeholder="titulo do nível" required title="Seu titulo deve possuir no minimo 10 letras">
	<input class="porcentagem-acerto${i}" type="number" min="0" max="100" placeholder="% de acerto mínima" required title="Informe um numero de 0 a 100">
	<input class="url-nivel${i}" type="url" placeholder="URL da imagem do nível" required title=" Confirme a URL, esta não é valida">
	<input class="text-area descricao-nivel${i}" type="text" minlength="30" placeholder="Descrição do nível" required title=" Sua descrição deve possuir no minimo 30 letras">
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


function hSucessoQuizz() {
	paginaInicial = document.querySelector('.h-login')

	paginaInicial.innerHTML = ` <h2> Seu quizz está pronto!</h2>`


	const quizzPromise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + lista);
quizzPromise.then(respostaSelecionarQuizz);

/*	<div id="${lista}" onclick="SelecionarQuiz(this)" class="gradiente tamanho-imagem" 
                    style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,
                    rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${parametroQuizz.image});width: 340px;
                    height: 181px;">
                    ${parametroQuizz.title} 
                </div>

				<button class="h-sucesso-quizz"onclick="#"> Acessar Quizz </button>
				<p onclick="retornarMenu()" > Voltar pra home </p>
*/
}



function retornarMenu(){

	paginaInicial = document.querySelector('.h-login')

	paginaInicial.innerHTML =`

<div id=y class="criar-quiz">
<p>"Você não criou nenhum quizz ainda :(" </p>
<button id="w" type="button" onclick="criarQuizz()">Criar Quizz</button>
</div>
<h2 id="z" class="criarQuizz">
Seus Quizzes
<ion-icon class="icon-add" type="button" name="add-circle" onclick="criarQuizz()">
</ion-icon>
</h2>

<div id="x" class="quizzes">

<div id=1 onclick="selecionarQuiz()" class="gradiente tamanho-imagem" style="background-image:
			linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
			url('./imagens/Rectangle\ 34.png');">
	Titulo da Pergunta
</div>

<div id=2 onclick="selecionarQuiz()" class="gradiente tamanho-imagem" style="background-image:
				linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
				url('./imagens/Rectangle\ 34.png');">
	Titulo da Pergunta
</div>

<div id=3 onclick="selecionarQuiz()" class="gradiente tamanho-imagem" style="background-image:
				linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
				url('./imagens/Rectangle\ 34.png');">
	Titulo da Pergunta
</div>

</div>

<h2>Todos os Quizzes </h2>
<div class="quizzes" id="todosQuizzes">
<div class="gradiente" style="background-image:
			linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
			url('./imagens/Os-Simpsons-Star-Plus.jpg');">
</div>
</div>

</div>
`
}

function hRetornaInputsNiveis() {

	for (let i = 1; i <= parametroQuizz.qtaNiveis; i++) {

		const tituloNivel = document.querySelector(`.texto-pergunta${i}`).value
		const porcentagemNivel = document.querySelector(`.porcentagem-acerto${i}`).value
		const urlNivel = document.querySelector(`.url-nivel${i}`).value
		const descricaoNivel = document.querySelector(`.descricao-nivel${i}`).value

		formularioNivel.push(
			{
				title: tituloNivel,
				image: urlNivel,
				text: descricaoNivel,
				minValue: porcentagemNivel
			}
		)
		}

	postQuizz()
}

function erro() {
	alert('falhouuu')
}


function hRetornoInputsFormulario() {

	for (let i = 1; i <= parametroQuizz.qtaPerguntas; i++) {

		let title = document.querySelector(`.texto-pergunta${i}`).value
		let color = document.querySelector(`.cor-fundo${i}`).value
		let respostaCorreta = document.querySelector(`.resposta${i}-correta`).value
		let url = document.querySelector(`.resposta${i}url`).value
		let respostaIncorreta = document.querySelector(`.resposta${i}-incorreta`).value
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
						text: respostaIncorreta,
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

			}
		)

	}
	
	hNiveisQuiz()

}


function ocultar(clicou) {

	const teste2 = document.querySelector(".secao")

	teste2.classList.toggle('ocultar')

 
}

function postQuizz() {

	envioQuizz = {
		title: parametroQuizz.title,
		image: parametroQuizz.image,
		questions: formularioPerguntas,
		levels: formularioNivel
	}

	const promise = axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', envioQuizz)
	promise.then(salvarNavegador)

}

function salvarNavegador(resp){
	
	meuPost.push(resp.data.id)
	
	const postSerializado = JSON.stringify(meuPost); // Array convertida pra uma string
	localStorage.setItem("lista", postSerializado); // Armazenando a string na chave "lista" do Local Storage
	
	const listaPostSerializada = localStorage.getItem("lista"); // Pegando de volta a string armazenada na chave "lista"
	lista = JSON.parse(listaPostSerializada); // Transformando a string de volta na array original

	envioQuizz= []

	console.log(listaPostSerializada[0]) //string
	console.log(lista)	//objeto
	console.log(postSerializado)//lista
	console.log(meuPost)
	console.log(resp.data.id)
	


hSucessoQuizz()
}