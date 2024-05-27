import { useState } from 'react';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <h1 className='text-4xl font-black tex-center'>All Products</h1>
    </div>
  );
};

export default AllProducts;
