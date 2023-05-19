import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // animas os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //Puxa os animais através de um arquivo json
  // e cria cada animal utilizando create animal
  async function createAnimais() {
    try {
      //Fetch,espera resposta e transforma em JSON
      const animaisResponse = await fetch(url);
      // transforma resposta em json
      const animaisJson = await animaisResponse.json();
      //após as transformações em JSON, ativa as funções
      // para preencher e animar os números
      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
        animaAnimaisNumeros();
      });
    } catch (erro) {
      console.log(erro);
    }
  }
  // Cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  return createAnimais();
}
