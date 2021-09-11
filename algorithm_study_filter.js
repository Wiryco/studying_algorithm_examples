// Simulação de filtros 

function busca_sugestoes(repository, filter) {
    let suggestions = [], filter_idx = 2, sugg_idx = 0;
    let _repository = repository.sort();
    if (filter.length >= 2) {
        while (filter_idx <= filter.length) {
            suggestions.push([]);
            _repository.forEach(element => {
                let element_repo = element.toUpperCase();
                let element_cust = filter.substr(0, filter_idx).toUpperCase();
                if (element_repo.startsWith(element_cust)) {
                    if (suggestions[sugg_idx].length < 3)
                        suggestions[sugg_idx].push(element);
                }
            });
            suggestions[sugg_idx].sort();
            sugg_idx++;
            filter_idx++;
        }
    }

    return suggestions;
}

function main() {
    let repository = ['mouse', 'mousepad', 'mascara', 'teste', 'operacao', 'mouse_trackball', 'mouse_sem_fio'];
    const filter = 'mas';

    const result = busca_sugestoes(repository, filter);

    console.log(result.map(element => element.join('\n')).join('\n'));
}

main();