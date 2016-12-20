import React, {Component} from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';

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
                <div className="App-content">
                    <Products />
                    <Cart />
                </div>
            </div>
        );
    }
}

export default App;
