export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((res) => res.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
      console.log(bitcoin.BRL.sell);
    })
    .catch((err) => {
      console.error("Fetch Error:", err);
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = "Erro ao carregar o preço";
    });
}

// https://blockchain.info/ticker
