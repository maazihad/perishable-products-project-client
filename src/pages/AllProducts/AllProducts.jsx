/* eslint-disable react/jsx-no-undef */
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsRow from './ProductsRow';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((data) => setProducts(data.data));
  }, []);
  return (
    <div>
      <h1 className='text-4xl font-black text-center'>All Products</h1>

      <div className=''>
        <table className='table bg-red-200 shadow-lg text-red-800 my-10'>
          {/* head */}
          <thead className='text-red-900 font-black'>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              <th>Image & Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => (
              <ProductsRow key={product.id} product={product}></ProductsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
