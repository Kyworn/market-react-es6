import React, {Component} from 'react';
import './Cart.css';
import Achat from './Achat.js';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            achats: [
                {
                    "article": "Slip",
                    "quantite": 3,
                    "prixHT": 12
                }
            ]
        }
    }
    render(){
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
                    {this.state.achats.map( (a, key) =>
                        <tr key={key}>
                            <td>{a.article}</td>
                            <td>{a.quantite}</td>
                            <td>{a.prixHT}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Cart;