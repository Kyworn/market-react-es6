import React, {Component} from 'react';
import './Cart.css';
// import Achat from './Achat.js';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            achats: [this.props.purchases],
            totalHT: null,
            totalTTC: null
        };
    }
    render(){
        console.log('render Cart!');
        console.log('this.props.purchases >> ', this.props.purchases);
        let totalHTML = null;
        if (this.props.purchases.length > 0) {
            this.calcTotal();
            console.log('state totalHT >> ', this.state.totalHT);
            totalHTML = <div className="total">
                            <p>Total HT : {this.state.totalHT} €</p>
                            <p>Total TTC : {this.state.totalTTC} €</p>
                        </div>
        }

        return (
            <div className="App-panier">
                <h1>Panier</h1>
                <table cellSpacing="10">
                    <thead>
                        <tr>
                            <td className="thead">Article</td>
                            <td className="thead">Quantité</td>
                            <td className="thead">Prix HT</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.purchases
                        .filter((achat) => achat.quantity > 0)
                        .map( (achat, key) =>
                        <tr key={key}>
                            <td>{achat.product.nom}</td>
                            <td>{achat.quantity}</td>
                            <td>{achat.product.prixHT * achat.quantity + " €"}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                {totalHTML}
            </div>
        )
    }
    calcTotal(){
        const TVA = 0.2;
        let totalHT = this.props.purchases
            .map((achat) => parseInt(achat.product.prixHT) * achat.quantity)
            .reduce((a,b) => a+b, 0);
        this.state.totalHT = totalHT.toFixed(2);
        this.state.totalTTC = (totalHT + (totalHT * TVA)).toFixed(2);
    }

}

export default Cart;