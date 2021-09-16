// Maximo de eventos por dia
// Sem conflitar com o horario de chegada de cada palestrante

function pushElement_Array(elemento_arrival, elemento_duration) {
  return {
    'h_chegada': elemento_arrival,
    'h_duracao': elemento_duration,
    'tempo_execucao': elemento_arrival + elemento_duration
  }
}

function max_events(arrival, duration) {
  let array_full = [], idx_array_full = 0, sum_tempo = 0;
  if (arrival.length == duration.length) {
    arrival.forEach((element, index) => {
      if (array_full.length > 0) {
        sum_tempo = element + duration[index];
        if (array_full[idx_array_full].h_chegada == element && array_full[idx_array_full].tempo_execucao > sum_tempo) {
          array_full[idx_array_full].h_duracao = duration[index];
          array_full[idx_array_full].tempo_execucao = element + duration[index];
        }

        if (array_full[idx_array_full].h_chegada != element && element >= array_full[idx_array_full].tempo_execucao) {
          array_full.push(pushElement_Array(element, duration[index]));
          idx_array_full += 1;
        }
      } else {
        array_full.push(pushElement_Array(element, duration[index]));
      }
    });
  }

  console.log('\n', 'Array com os horários -> ', array_full, '\n');
  return array_full.length;
}

function main() {
  // Arrival = Array com o horario de chegada
  const arrival = [1, 3, 3, 3, 3, 3, 5, 6];
  // Duration = Array com a duração em horas de cada palestra
  const duration = [2, 10, 1, 6, 4, 5, 1, 3];

  const result = max_events(arrival, duration);

  console.log(result, ' \n');
  console.log('O máximo de eventos que pode acontecer nesse dia é -> ', result, ' \n');
}

main();