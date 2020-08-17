import React, { Component } from 'react';
import { Decisao } from "./Decisao";
import { Observacao } from "./Observacao";
import { newDecision } from '../redux/thunk_actions';
import { connect } from 'react-redux';


export class PautaState extends Component {

    state = { nova_decisao_nome: '' };

    componentDidMount() {}

    render() {
        return (
            <div>
                <h2>Pauta: {this.props.pauta.name}</h2>
                <input
                    type="text"
                    value={this.state.nova_decisao}
                    onChange={ev => this.setState({ nova_decisao_nome: ev.target.value })}
                    placeholder="Nova Decisao..."
                />
                <button onClick={() => this.props.dispatch(newDecision(this.state.nova_decisao_nome, this.props.idx))}>Nova Decisao</button>
                <ul>
                    {this.props.global_pautas[this.props.idx].decisoes.map((conteudo, index) => (
                        <li key={index}>
                            <Decisao conteudo={conteudo} />
                        </li>
                    ))}
                </ul>
                <Observacao />
                <hr />

            </div>);
    }


}

/**
 * Faz o mesmo da anterior. Mas note uma coisa que eu errei:
 * Vc deve passar para props um reducer. Não um 'sub objeto' de um reducer. Aqui 
 * eu tentei passar ao invés de `state.pautasReducer`, eu passei:
 * `state.pautasReducer[ownProps.idx].decisoes`, para ficar mais direto o que eu
 *  to acessando. Mas o efeito disso foi que esse componente não atualizava com
 * o estado. Os dados chegavam, mas o metodo `render()`  não era chamado.
 * Isso me deixou meio maluco, mas no final deu certo.
 */
const mapStateToProps = (state, ownProps) => {
    return ({ global_pautas: state.pautasReducer });
  }
const Pauta = connect(mapStateToProps)(PautaState);


export default Pauta;
