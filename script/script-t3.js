let login

function receberValoresT3(){

const titulo =document.querySelector('.titulo').value
const url =document.querySelector('.url').value
const qtaPerguntas =document.querySelector('.qta-perguntas').value
const qtaNiveis =document.querySelector('.qta-niveis').value
login = {titulo:titulo ,
    url:url, 
    qtaPerguntas:qtaPerguntas,
    qtaNiveis:qtaNiveis}

    checkUrl(url)
}

function log(){
console.log(login)
alert('oi')
}

function checkUrl(url) {
    try {
     let ur = new URL(url)
     console.log("Valid URL!")
     return proximaTela()
    } 
    
    
    catch(err) {
       console.log("Invalid URL!")
   }

   
 }


 function proximaTela() {
    

    if(19 < titulo.length && qtaPerguntas > 2 && qtaNiveis >1 ){
        console.log(titulo.length)
        log()
       }

 }