import React, {Component} from 'react';
import Loader from './Loader';
import ViewProduct from './ViewProduct';
import './Products.css';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = { products: [] };
        let loader = new Loader();
        loader.loadFromDB('http://localhost:8888/src/traitement.php', this.onCatalogueReady.bind(this));
    }
    render(){
        return (
            <div className="App-products">
                <h1 className="h1">Produits</h1>
                <div className="products">
                    {this.state.products.map( (product, key) =>
                        <ViewProduct product={product} key={key} onDataChanged={this.props.onDataChanged.bind(this)} />
                    )}
                </div>
            </div>
        );
    }
    onCatalogueReady(products){
        this.setState({products: products});
        console.log('this.state.products >> ', this.state.products);
    }
}

export default Products;