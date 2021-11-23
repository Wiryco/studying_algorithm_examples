const base_url = 'https://api.brasil.io/v1/dataset/';
const token = '99c3e1c99c174f6a2861947c6f91f2eade87e5d1';

let dados_table = [];

const read_table_brasilio = async (dataset, name_table) => {
  const url = base_url + dataset + '/' + name_table + '/data/'
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`
    },
  }).then(search => {
    search.json().then(result => {
      if (result) tratarDados(result.results);
    });
  });
}

function tratarDados(dados) {
  if (dados && dados.length > 0) {
    console.log(dados);
    JSON.stringify
  }
}

const main = async () => {
  await read_table_brasilio('covid19', 'caso_full');
}

main();