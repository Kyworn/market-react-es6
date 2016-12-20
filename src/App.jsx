import React, {Component} from 'react';
import './App.css';
import Products from './products.js';

class App extends Component {

    // constructor(props){
    //     super(props);
    // }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Boutique React</h2>
                </div>
                <Products />
            </div>
        );
    }
}

export default App;
