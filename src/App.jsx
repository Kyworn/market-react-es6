import React, {Component} from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            achats: []
        }
    }

    onDataChanged(value){
        let purchases = this.state.achats;
        let match = purchases.filter(achat => {
            return value.product.nom === achat.product.nom;
        });
        match.length > 0 ? match[0].quantity += value.quantity : purchases.push(value);
        this.setState({
            achats: purchases
        });
        console.log(this.state.achats);
    }

    render() {
        console.log('render App!');
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Boutique React</h2>
                </div>
                <div className="App-content">
                    <Products data={this.products} onDataChanged={this.onDataChanged.bind(this)} />
                    <Cart purchases={this.state.achats}/>
                </div>
            </div>
        );
    }
}

export default App;
