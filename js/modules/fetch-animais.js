import AnimaNumeros from "./anima-numeros.js";

export default function criarAnimais(url, target) {
  // Cria a div contendo informações com o total de animais.
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa cada animal através de um fetch num arquivo json
  //  e cria cada animal utilizando createAnimal.
  async function criarAnimais() {
    try {
      // Fetch, espera resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // Após a transformação, ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (error) {
      const numerosGrid = document.querySelector(".numeros-grid");
      numerosGrid.innerHTML = "<p>Erro ao carregar os animais.</p>";
    }
  }

  return criarAnimais(url, target);
}
