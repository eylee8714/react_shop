import React, { useState } from 'react';

/* 공급업체 수정 or 공급업체 등록 */
function SupplierEditor({ supplier, saveCallback, cancelCallback }) {
  //각 필드의 초깃값
  const [formData, setFormData] = useState({
    id: supplier.id || '',
    name: supplier.name || '',
    city: supplier.city || '',
    products: supplier.products || [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    if (event.currentTarget.name === 'products') {
      setFormData({
        ...formData,
        [event.currentTarget.name]: event.currentTarget.value.split(','),
      });
    } else {
      setFormData({
        ...formData,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    }
  };

  const handleClick = () => {
    saveCallback({
      ...formData,
      products: formData.products.map((val) => Number(val)),
    });
  };

  return (
    <form>
      <label>ID</label>
      <input name="id" disabled value={formData.id} onChange={handleChange} />
      <label>Name</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <label>City</label>
      <input name="city" value={formData.city} onChange={handleChange} />
      <label>Products</label>
      <input
        name="products"
        value={formData.products}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Save</button>
      <button onClick={cancelCallback}>Cancel</button>
    </form>
  );
}

export default SupplierEditor;
