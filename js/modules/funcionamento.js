export default class Funcionamento {
  constructor(dataFuncionamento) {
    // Selecionando no DOM a 'li' e colocando em constante o dataset-semana e dataset-horario
    this.funcionamento = document.querySelector(dataFuncionamento);

    // Na constante semanaAberta eu verifico se na outra constante diasSemana possui o index difrente de -1, no caso o diasSemana vai de 0 a 5 e se o index for difrente desses valores dará -1 e sendo difrente de -1 então está aberto.
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAtuais() {
    // Pegando a data atual e colocando em uma constante
    this.dataAgora = new Date();

    // Pegando Dia e Horarío atuais e colocando em uma constante
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    this.semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];

    return this.semanaAberta && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add("aberto");
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAtuais();
      this.ativaAberto();
    }
    return this;
  }
}
