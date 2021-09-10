// Simulação de filtros 

function busca_sugestoes(repository, filter) {
    let keywords_suggestions = [];

    repository.forEach(element => {
        if (element.startsWith(filter)) {
            if (keywords_suggestions.length < 3)
                keywords_suggestions.push(element.toUpperCase()); //keywords_suggestions.push([element.toUpperCase()]);
        }
    });

    return keywords_suggestions;
}

function main() {
    let repository = ['mouse', 'mousepad', 'mascara', 'teste', 'operacao', 'mouse_trackball', 'mouse_sem_fio'];
    const filter = 'mo';

    const result = busca_sugestoes(repository, filter);

    //console.log(result.map(element => element.join('\n')).join('\n'));
    console.log(result.map(element => element).join('\n'));
}

main();