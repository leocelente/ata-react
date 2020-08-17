

// actions.js



function newDecision(conteudo, index) {
  return function (dispatch, getState) {
      // Wait for a long time ...
      dispatch({ type: "ADD_DECISAO", conteudo: conteudo, index:index });
  }
}

export { newDecision };

