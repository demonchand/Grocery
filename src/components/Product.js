import React, {Component} from 'react';
import ProductDetails from './ProductDetails'
import groceryData from './api/grocery'

class Product extends Component {
  renderList() {
    return groceryData.map((product, i) => {
      return(
        <ProductDetails product={product} key={i} />
      );
    });
  }

  render() {
    return(
      <div className="someone">
        <h1>Products</h1>
        <div className="product-details">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default Product;
