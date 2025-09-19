export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number); // pega os valores dos dias de data-semana e transforma em array de números	usando os métodos split e map. Map recebeu o objeto Construtor Number.
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date(); // cria um novo objeto Date com a data atual
  const diaAgora = dataAgora.getDay(); // pega o dia atual da semana (0-6)
  const horarioAgora = dataAgora.getHours(); // pega a hora atual (0-23)

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // verifica se o dia atual está no array de dias da semana

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]; // verifica se a hora atual está dentro do intervalo de horário

  if (semanaAberto && horarioAberto) {
    // verifica se estamos abertos
    funcionamento.classList.add("aberto");
  }

  console.log(diaAgora); // imprime o dia da semana atual no console
}
