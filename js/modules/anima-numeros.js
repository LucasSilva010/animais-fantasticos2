export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do objeto da classe aos callbacks
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do DOM com número em seu texto,
  // incrementa a partir de 0 até o número final

  static incrementNumber(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
        return;
      }
    }, 40 * Math.random());
  }
  // Ativa incrementar numero para cada
  // Número selecionado no DOM
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementNumber(numero));
  }

  // Função que ocorre quando a mutação é observada
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {
      attributes: true,
    });
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver();
    }
    return this;
  }
  // Primeiros passamos o elemento que queremos observar, no caso o elemento com a classe numeros. Depois passamos um objeto de configuração, onde podemos passar o que queremos observar. No caso, estamos observando os atributos do elemento. Assim que o elemento for alterado, a função handleMutation será chamada.
}
