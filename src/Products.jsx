import React, {Component} from 'react';
import Loader from './Loader';
import './Products.css';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = { products: [] };
        let loader = new Loader();
        loader.loadFromDB('http://localhost:8888/src/traitement.php', this.onCatalogueReady.bind(this));
        this.render();
    }
    render(){
        let titleStyle = {
            "marginBottom": "50px"
        }
        return (
            <div className="App-products">
                <h1 style={titleStyle}>Produits</h1>
                <div className="products">
                    {this.state.products.map( (product, key) =>
                        <div className="product" key={key}>
                            <div className="productTitle">
                                {product.nom}
                            </div>
                            <div className="productPrice">
                                {product.prixHT} €
                            </div>
                            <input type="number" defaultValue="1"/>
                            <button>Ajouter</button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    onCatalogueReady(products){
        console.log('products onCatalogueReady', products);
        this.setState({products: products});
        console.log('this.state', this.state.products);
    }
}

export default Products;