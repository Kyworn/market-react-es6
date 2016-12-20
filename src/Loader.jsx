class Loader {
    constructor(){
        this.produits = [];
    }
    loadFromDB(url, onLoadCallback){
        this.onLoadCallback = onLoadCallback;

        let req = new XMLHttpRequest();
        req.onload = this.onDataReady.bind(this);
        req.open('GET', url, true);
        req.send();
    }
    onDataReady(){
        this.products = JSON.parse(event.target.responseText);

        this.products.forEach( p => {
            console.log(p.nom);
            console.log(p.prixHT);
        });

        this.onLoadCallback(this.products);

    }
}

export default Loader;