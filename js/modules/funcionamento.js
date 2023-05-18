export default function initFuncionamento() {
  // Selecionando no DOM a 'li' e colocando em constante o dataset-semana e dataset-horario
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  // Pegando a data atual e colocando em uma constante
  const dataAgora = new Date();

  // Pegando Dia e Horarío atuais e colocando em uma constante
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // Na constante semanaAberta eu verifico se na outra constante diasSemana possui o index difrente de -1, no caso o diasSemana vai de 0 a 5 e se o index for difrente desses valores dará -1 e sendo difrente de -1 então está aberto.

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}
