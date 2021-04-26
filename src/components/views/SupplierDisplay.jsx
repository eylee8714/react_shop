import React, { useState } from 'react';
import SupplierEditor from './SupplierEditor';
import SupplierList from './SupplierList';
//SupplierList 와 SupplierEditor 사이를 전환하는 컴포넌트
function SupplierDisplay({ suppliers, saveCallback, deleteCallback }) {
  const [showEditor, setShowEditor] = useState(false);
  const [selected, setSelected] = useState(null);

  //상품수정
  const startEditing = (supplier) => {
    setShowEditor(true);
    setSelected(supplier);
  };

  //상품생성
  const createSupplier = () => {
    setShowEditor(true);
    setSelected({});
  };
  //수정취소
  const cancelEditing = () => {
    setShowEditor(false);
    setSelected(null);
  };
  //상품등록
  const saveSupplier = (supplier) => {
    saveCallback(supplier);
    setShowEditor(false);
    setSelected(null);
  };

  if (showEditor) {
    return (
      <SupplierEditor
        key={selected.id || -1}
        supplier={selected}
        saveCallback={saveSupplier}
        cancelCallback={cancelEditing}
      />
    );
  } else {
    return (
      <>
        <SupplierList
          suppliers={suppliers}
          editCallback={startEditing}
          deleteCallback={deleteCallback}
        />
        <button onClick={createSupplier}>상품등록</button>
      </>
    );
  }
}

export default SupplierDisplay;
