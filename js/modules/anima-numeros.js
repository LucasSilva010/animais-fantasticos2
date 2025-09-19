export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
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
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, {
    attributes: true,
  });

  // Primeiros passamos o elemento que queremos observar, no caso o elemento com a classe numeros. Depois passamos um objeto de configuração, onde podemos passar o que queremos observar. No caso, estamos observando os atributos do elemento. Assim que o elemento for alterado, a função handleMutation será chamada.
}
