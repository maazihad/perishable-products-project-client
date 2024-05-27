import { useEffect } from 'react';

const AddProduct = () => {
  const handleAddProduct = async (event) => {
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

    await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dta) => {
        console.log(dta);
        form.reset();
      });
  };

  useEffect(() => {}, []);

  return (
    <div className='my-5'>
      <h1 className='text-4xl font-black text-center'>Add Product</h1>

      <form onSubmit={handleAddProduct} className='text-center my-4 '>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='number'
            name='id'
            id=''
            placeholder='Product ID'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='text'
            name='product_name'
            id=''
            placeholder='Product Name'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='text'
            name='product_img'
            id=''
            placeholder='Product Image URL'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='text'
            name=''
            id='description'
            placeholder='Product Description'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900  '
            type='text'
            name='features'
            id=''
            placeholder='3 Product Features'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='number'
            name='price'
            id=''
            placeholder='Product Price'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg bg-red-100 text-red-900 '
            type='number'
            name='rating'
            id=''
            placeholder='Product Rating'
          />
        </div>
        <div className='my-3'>
          <input
            className='w-9/12 p-3 rounded-lg duration-300 font-bold bg-red-400 hover:bg-red-800 hover:text-red-100 text-red-900 '
            type='submit'
            name=''
            id=''
            value='Add Product'
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
