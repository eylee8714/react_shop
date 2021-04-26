import React, { useState } from 'react';

/* 상품 등록 or 상품 수정  */
function ProductEditor({ product, saveCallback, cancelCallback }) {
  //input의 기본 value (상품수정 || 상품등록)
  const [formData, setFormData] = useState({
    id: product.id || '',
    name: product.name || '',
    category: product.category || '',
    price: product.price || '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleClick = () => {
    saveCallback(formData);
  };

  return (
    <form>
      <label>ID</label>
      <input name="id" disabled value={formData.id} onChange={handleChange} />
      <label>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <label>Category</label>
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <label>Price</label>
      <input name="price" value={formData.price} onChange={handleChange} />
      <button onClick={handleClick}>Save</button>
      <button onClick={cancelCallback}>Cancel</button>
    </form>
  );
}

export default ProductEditor;
