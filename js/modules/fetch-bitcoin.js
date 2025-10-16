export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((err) => {
      console.error("Fetch Error:", err);
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = "Erro ao carregar o preço";
    });
}

// https://blockchain.info/ticker
