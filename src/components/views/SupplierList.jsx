import React from 'react';
import Supplier from './Supplier';

/* 상품 리스트 렌더링 */
function SupplierList({ suppliers, editCallback, deleteCallback }) {
  return (
    <div>
      <ul>
        {suppliers.map((supplier) => (
          <Supplier
            key={supplier.id}
            supplier={supplier}
            editCallback={editCallback}
            deleteCallback={deleteCallback}
          />
        ))}
      </ul>
    </div>
  );
}

export default SupplierList;
