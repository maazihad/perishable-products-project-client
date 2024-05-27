import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProduct = () => {
  const product = useLoaderData();
  console.log(product);

  const [productId, setProductId] = useState(product.id);
  const [productName, setProductName] = useState(product.product_name);
  const [productImg, setProductImg] = useState(product.product_img);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productFeatures, setProductFeatures] = useState(product.features);
  const [productDescription, setProductDescription] = useState(
    product.description,
  );
  const [productRating, setProductRating] = useState(product.rating);

  const handleEditProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const product_name = form.product_name.value;
    const product_img = form.product_img.value;
    const description = form.description.value;
    const features = form.features.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const data = {
      id,
      product_name,
      product_img,
      description,
      features,
      price,
      rating,
    };
    console.log(data);

    await fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dta) => {
        console.log(dta);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Editing',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className='my-5'>
      <h1 className='text-4xl font-black text-center'>Edit Product</h1>

      <form onSubmit={handleEditProduct} className='text-center my-4 '>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='number'
            name='id'
            id=''
            placeholder='Product ID'
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='text'
            name='product_name'
            id=''
            placeholder='Product Name'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='text'
            name='product_img'
            id=''
            placeholder='Product Image URL'
            value={productImg}
            onChange={(e) => setProductImg(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='text'
            name=''
            id='description'
            placeholder='Product Description'
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900  '
            type='text'
            name='features'
            id=''
            placeholder='3 Product Features'
            value={productFeatures}
            onChange={(e) => setProductFeatures(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='number'
            name='price'
            id=''
            placeholder='Product Price'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='number'
            name='rating'
            id=''
            placeholder='Product Rating'
            value={productRating}
            onChange={(e) => setProductRating(e.target.value)}
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg duration-300 font-bold bg-red-400 hover:bg-red-800 hover:text-red-100 text-red-900 '
            type='submit'
            name=''
            id=''
            value='Edit Product'
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
