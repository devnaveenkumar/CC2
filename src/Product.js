import React from 'react';

function withProductList(WrappedComponent) {
  return class extends React.Component {
    render() {
      const { productList } = this.props;

      return <WrappedComponent productList={productList} />;
    }
  }
}

class ProductList extends React.Component {
  render() {
    const { productList } = this.props;

    return (
      <div>
        <h2>Product List</h2>
        <ol>
          {productList.map(product => (
            <li key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const Product = withProductList(ProductList);

export default Product;