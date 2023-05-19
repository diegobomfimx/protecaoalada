export default function fetchBtcPreco(url, target) {
  async function fetchBtc(url) {
    const btc = await fetch(url);
    const btcAtual = await btc.json();
    const span = document.querySelector(target);
    span.innerText = (100 / btcAtual.BRL.buy).toFixed(4);
  }

  fetchBtc(url).catch((erro) => {
    console.log(Error(erro));
  });
}
