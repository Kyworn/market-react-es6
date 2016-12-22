import React, {Component} from 'react';
import Achat from './Achat';

class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
        this.render();
    }

    render() {
        return (
            <div className="product" key={this.key}>
                <div className="productTitle">
                    {this.props.product.nom}
                </div>
                <div className="productPrice">
                    {this.props.product.prixHT} €
                </div>
                <input onChange={this.handleChange.bind(this)} type="number" defaultValue="1"/>
                <button onClick={this.setPurchase.bind(this)}>Ajouter</button>
            </div>
        )
    }

    handleChange(ev) {
        if (ev.target.value < 1) {
            alert('Dur dur de passer commande dans ces conditions ! ;-)');
            ev.target.value = 1;
        } else
            this.setState({
                quantity: parseInt(ev.target.value, 10)
            });
    }

    setPurchase() {
        this.props.onDataChanged(new Achat(this.props.product, this.state.quantity))
    }
}

export default ViewProduct;