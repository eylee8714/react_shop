import React, { useState } from 'react';
import ProductDisplay from './ProductDisplay';
import Selector from './Selector';
import SupplierDisplay from './SupplierDisplay';

function ProductsAndSuppliers() {
  const [products, setProducts] = useState([
    { id: 1, name: '카약', category: '바다스포츠', price: 10000 },
    { id: 2, name: '안전조끼', category: '바다스포츠', price: 20000 },
    { id: 3, name: '축구공', category: '축구', price: 30000 },
  ]);

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: '서프', city: '인천', products: [1, 2] },
    { id: 2, name: '필드경기장', city: '제주도', products: [3] },
  ]);

  const [idCounter, setIdCounter] = useState(100);

  const saveData = (collection, item) => {
    // 상품등록
    if (item.id === '') {
      setIdCounter(idCounter + 1);
      item.id = idCounter; // 상품등록 시, 새로운 id 생성
      const updated = collection.concat(item);
      collection === products ? setProducts(updated) : setSuppliers(updated);
    } else {
      //  상품수정
      const updated = collection.map((collection) =>
        collection.id === item.id ? item : collection
      );
      collection === products ? setProducts(updated) : setSuppliers(updated);
    }
  };

  //상품삭제
  const deleteData = (collection, item) => {
    const updated = collection.filter((stored) => stored.id !== item.id);
    collection === products ? setProducts(updated) : setSuppliers(updated);
  };

  return (
    <Selector>
      <ProductDisplay
        name="Products"
        products={products}
        saveCallback={(p) => saveData(products, p)}
        deleteCallback={(p) => deleteData(products, p)}
      />
      <SupplierDisplay
        name="Suppliers"
        suppliers={suppliers}
        saveCallback={(s) => saveData(suppliers, s)}
        deleteCallback={(s) => deleteData(suppliers, s)}
      />
    </Selector>
  );
}

export default ProductsAndSuppliers;
