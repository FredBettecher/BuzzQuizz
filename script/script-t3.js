let login

hCriarQuiz()


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
login = {titulo:titulo ,
    url:url, 
    qtaPerguntas:qtaPerguntas,
    qtaNiveis:qtaNiveis}

    if(19 < titulo.length && qtaPerguntas > 2 && qtaNiveis >1 ){
        console.log(titulo.length)
        console.log(login)
        hCriarQuiz()
        hFormularioQuiz()
       }
}



function hFormularioQuiz(){

    let paginaInicial =document.querySelector('.h-login')
   
paginaInicial.innerHTML =` <h2> crie suas perguntas </h2>

<form action="javascript: hReceberValores();"  class='aqui'>

`
for(let i=1; i <= login.qtaPerguntas; i++){
    paginaInicial =document.querySelector('.aqui')
    paginaInicial.innerHTML+=
    `
<div class="pergunta">
<h2> pergunta ${i}</h2>
<img src="./imagens/edit.svg" alt="" onclick="">
</div>


<input class="txtPergunta${i}" type="text" minlength="20" placeholder="Texto da pergunta" required title="Sua pergunda deve ter no mínimo 20 letras">
<input class="corFundo"type="" placeholder="Cor de fundo da pergunta" required title="deve ser uma cor em hexadecimal (começar em "#", seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F)">


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

` 
}

paginaInicial.innerHTML+=
`
<input class="criar-pergunta" type="submit" value="Prosseguir pra criar níveis">

</form>
`

//cor.lastChild.classList.add.('teste')
  //  console.log(login.titulo)
}


function valor(){

    console.log(login)
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
