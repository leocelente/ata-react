

/**
 * Takes in current `state` and the `action` that 'applies' a transformation
 * Returns copy os Transformed __Copy__ of State
 * @param {Array} state  Current Array of Pautas 
 * @param {*} action Wrapper of Event
 */
function pautasReducer(state = [], action) {
    console.log("EVENT:", action);
    console.log("STATE:", state);
    var copy_of_state = Array.from(state);
    switch (action.type) {
        case 'ADD_PAUTA':
            copy_of_state.push(action.pauta);
            return copy_of_state;
        case 'ADD_DECISAO':
            copy_of_state[action.index].decisoes.push(action.conteudo);
            return copy_of_state;
        default:
            return state;
    }
}

export { pautasReducer };
