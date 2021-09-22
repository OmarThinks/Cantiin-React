import { Component } from 'react';

class ProductsList extends Component {
    state={
        loaded:false,
        products:[],
        rendered:<div>
            <h1>Products List:</h1>
            <p>Loading...</p>
        </div>
    }

    
    render() { 
        return this.state.rendered;
    }
}
 
export default ProductsList;