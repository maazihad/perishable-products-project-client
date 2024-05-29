import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const products = useLoaderData();
  const { product_name, product_img, price, rating, description, features } =
    products;
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <figure>
        <img
          className='object-cover w-full h-full'
          src={product_img}
          alt='Perishable Products'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product_name}</h2>
        <p>Description : {description}</p>
        <p>Price : {features}</p>
        <div className=''>
          <p>Rating : {rating}</p>
          <p>Price : ${price}</p>
        </div>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Add Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
