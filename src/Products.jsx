import React, {Component} from 'react';
import Loader from './Loader';

class Products extends Component {
    constructor(props){
        super(props);
        let loader = new Loader();
        loader.loadFromDB('http://localhost:8888/src/traitement.php', this.onCatalogueReady.bind(this));
    }
    render(){
        return (
            <div id="test">
                {this.products}
            </div>
        );
    }
    onCatalogueReady(products){
        this.products = products;
        console.log(this.products);
        this.render();
    }
}

export default Products;