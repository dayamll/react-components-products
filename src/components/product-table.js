import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';

const ProductTable = ({ products }) => {
  // Seteando valores
  const rows = [];
  let lastCategory = null;

  return (
    <table className="table">
      {/* <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead> */}
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable