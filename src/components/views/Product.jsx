import React from 'react';

/* 상품 1개 렌더링*/
function Product({ product, editCallback, deleteCallback }) {
  return (
    <li>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>{Number(product.price)}</p>
      <button onClick={() => editCallback(product)}>수정</button>
      <button onClick={() => deleteCallback(product)}>삭제</button>
    </li>
  );
}

export default Product;
