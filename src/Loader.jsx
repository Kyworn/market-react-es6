import Product from './Product.js';

class Loader {
    constructor() {
        this.products = [];
    }

    loadFromDB(url, onLoadCallback) {
        this.onLoadCallback = onLoadCallback;

        let req = new XMLHttpRequest();
        req.onload = this.onDataReady.bind(this);
        req.open('GET', url, true);
        req.send();
    }

    onDataReady() {
        this.products = JSON.parse(event.target.responseText)
            .map(p => new Product(p.nom, p.prixHT));

        this.onLoadCallback(this.products);
    }
}

export default Loader;