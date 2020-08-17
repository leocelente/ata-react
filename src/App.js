import React, { Component } from 'react';
import Pauta from './components/Pauta'
import { connect } from 'react-redux';
import { newPauta } from './redux/thunk_actions';

// App.js
export class App extends Component {
  /**
   * component local state
   */
  state = {
    /**
     * O que o usuário está digitando
     */
    nova_pauta: 'Presentes'
  };

  componentDidMount() { }


  render() {
    console.log("redering app with props ",this.props);
    return (
      <div>
        <h1>Ata da Reunião:</h1>
        <strong>Nova Pauta: </strong>
        <input
          type="text"
          value={this.state.nova_pauta}
          onChange={ev => this.setState({ nova_pauta: ev.target.value })}
          placeholder="nova pauta..."
        />
        <button onClick={() => this.props.dispatch(newPauta(this.state.nova_pauta))}>
          ADD
        </button>

        <ul>
          {this.props.global_pautas.map((pauta, index) => (
            <li key={index}>
              <Pauta pauta={pauta} idx={index} />
            </li>
          ))}
        </ul>
        <button onClick={() => console.log(this.props.global_pautas)} >Exportar</button>
      </div>
    );
  }
}

/*
  Essa parte disponibiliza o estado global e o metodo dispatch
  Eles ficam acessiveis por meio da `this.props`
*/
const mapStateToProps = (state, ownProps) => {
  return ({ global_pautas: state.pautasReducer });
}
const AppContainer = connect(mapStateToProps /*  */)(App);

export default AppContainer;
