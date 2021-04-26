import React, { useState } from 'react';
import ProductEditor from './ProductEditor';
import ProductList from './ProductList';

//ProductList 와 ProductEditor 사이를 전환하는 컴포넌트
function ProductDisplay({ products, saveCallback, deleteCallback }) {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedProduct, setselectedProduct] = useState(null);

  //상품수정
  const startEditing = (product) => {
    setShowEditor(true);
    setselectedProduct(product);
  };
  //상품생성
  const createProduct = () => {
    setShowEditor(true);
    setselectedProduct({});
  };
  //수정취소
  const cancelEditing = () => {
    setShowEditor(false);
    setselectedProduct(null);
  };
  //상품등록
  const saveProduct = (product) => {
    saveCallback(product);
    setShowEditor(false);
    setselectedProduct(null);
  };

  if (showEditor) {
    return (
      <ProductEditor
        key={selectedProduct.id || -1}
        product={selectedProduct}
        saveCallback={saveProduct}
        cancelCallback={cancelEditing}
      />
    );
  } else {
    return (
      <>
        <ProductList
          products={products}
          editCallback={startEditing}
          deleteCallback={deleteCallback}
        />
        <button onClick={createProduct}>상품등록</button>
      </>
    );
  }
}

export default ProductDisplay;
