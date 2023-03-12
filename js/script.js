//Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  //Qualquer objeto dentro do 'window', pode ser acessado direto 'location', invés de 'window.location'.
  const url = location.href;
  const href = link.href;

  //Verificar se dentro de 'url', há o trecho do 'href'. Se SIM, iremos adicionar uma classe ("ativo"), então iremos modificar no CSS.
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar item do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(param) {
  const elemento = document.getElementById(param);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa"); //Ao clickar será adicionado a class 'ativa' no <dd> baseado no valor do 'aria-controls' do <dt> e no #id do <dd>.
  const ativa = pergunta.classList.contains("ativa"); //Irá verificar se .contains("ativa") e irá retornar um bool
  pergunta.setAttribute("aria-expanded", ativa); //Irá setar o valor do 'aria-expanded' baseado no valor de verificação anterior do 'ativa'.
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagem img");
const galeriaContainer = document.querySelector(".bicicleta-imagem");

function trocarImagem(event) {
  const img = event.currentTarget;
  var media = matchMedia("(min-width: 1000px)").matches; //Irá verificar o tamanho da tela.
  if (media) {
    galeriaContainer.prepend(img); //Iremos alterar a posição na galeria, com o 'prepend', pois a primeira listada, é a que aparece maior na galeria.
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
