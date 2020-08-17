
/**
 * Assincronamente dispara um evento para adicionar uma pauta
 * @param {String} pauta_nome Nome da Pauta que será criada
 */
function newPauta(nome) {
    return function (dispatch, getState) {
        setTimeout(() => {
            const nova_pauta = {
                name: nome,
                observacoes: [],
                decisoes: []
            }
            dispatch({ type: "ADD_PAUTA", pauta: nova_pauta });
        }, 600);
    }
}

function newDecision(conteudo, index) {
    return function (dispatch, getState) {
        
        setTimeout(() => {
            dispatch({ type: "ADD_DECISAO", conteudo: conteudo, index: index });
        }, 500);
    }
}

export { newPauta, newDecision };

