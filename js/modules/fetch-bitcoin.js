export default function initBtcPreco() {
  async function fetchBtc(url) {
    const btc = await fetch(url);
    const btcAtual = await btc.json();
    const span = document.querySelector(".btc-preco");
    span.innerText = (100 / btcAtual.BRL.buy).toFixed(4);
  }

  fetchBtc("https://blockchain.info/ticker").catch((erro) => {
    console.log(Error(erro));
  });
}
