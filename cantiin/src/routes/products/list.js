import { Component } from 'react';

class ProductsList extends Component {
    state={
        loaded:false,
        products:[]
    }

    renderProducts=()=>{return "";}

    render() { 
        let toRender = "";
        if(this.state.loaded){toRender=this.renderProducts();}
        else{toRender=<div> <p> Loading... </p> </div>;}
        return <div>

                <h1>Products List</h1>
                {toRender}
                </div>;
    }
}
 
export default ProductsList;