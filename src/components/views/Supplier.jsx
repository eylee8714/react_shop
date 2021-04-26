import React from 'react';

/* 상품 1개 렌더링*/
function Supplier({ supplier, editCallback, deleteCallback }) {
  return (
    <li>
      <p>{supplier.id}</p>
      <p>{supplier.name}</p>
      <p>{supplier.city}</p>
      <p>{supplier.products.join(', ')}</p>
      <button onClick={() => editCallback(supplier)}>수정</button>
      <button onClick={() => deleteCallback(supplier)}>삭제</button>
    </li>
  );
}

export default Supplier;
