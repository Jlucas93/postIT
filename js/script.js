//Pegando a div app
var appElement = document.getElementById('app');

//estilizando o app
appElement.style.alignItems = "center";
appElement.style.display = "flex";
appElement.style.backgroundColor= "#2b2b2b";
appElement.style.height = "100vh";
appElement.style.flexDirection = 'column';
appElement.style.justifyContent = "top";
appElement.style.width = "100vw";

//Criando os elementos
var btnElement = document.createElement('button');
var inputElement = document.createElement('input');

//Definindo atributos para o botão
btnElement.setAttribute('id', 'nome');
var txt = document.createTextNode('Criar post it');
btnElement.appendChild(txt);

//Definindo atributos para input
inputElement.setAttribute('id', 'nome');
inputElement.setAttribute('type', 'nome');
inputElement.setAttribute('placeholder', 'Digite o lembrete');

//Criando a função para gerar um quadrado e receber o valor do input
function postit(){
    var squareElement = document.createElement('div');
    squareElement.setAttribute('id','square')
    
    var texts = document.createTextNode(inputElement.value);
    squareElement.appendChild(texts);
    
    //Estilizando o post it
    squareElement.style.width = '200px';
    squareElement.style.height = '200px';
    squareElement.style.backgroundColor = 'yellow';
    squareElement.style.margin = '5px';
    squareElement.style.fontSize = '35px';
    squareElement.style.justifyContent = 'center';
    
    
    appElement.appendChild(squareElement);
}

//Craidno função para limpar campo do input
function apagar(){
    inputElement.value = '';
}

//Linkando a função com o botão
btnElement.onclick = function(){
    postit();
    apagar();
}
// Atribuindo a Div app
appElement.appendChild(btnElement);
appElement.appendChild(inputElement);
