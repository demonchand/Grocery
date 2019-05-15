import React, {Component} from 'react';

class ProductDetails extends Component {
  render() {
    return(
      <div className="product-detail">
        <div className="product-header">
          <p>QTY: {this.props.product.qty}</p>
        </div>
        <div className="product-body">
          <h1>{this.props.product.item}</h1>
          <div>{this.props.product.type}</div>
        </div>
        <div className="product-footer">
          <div>{this.props.product.brand}</div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
