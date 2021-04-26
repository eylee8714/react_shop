import React from 'react';
import Product from './Product';

/* 상품 리스트 렌더링 */
function ProductList({ products, editCallback, deleteCallback }) {
  return (
    <ul>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          editCallback={editCallback}
          deleteCallback={deleteCallback}
        />
      ))}
    </ul>
  );
}

export default ProductList;
