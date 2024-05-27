import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProductsRow = ({ product }) => {
  const {
    id,
    product_name,
    product_img,
    price,
    features,
    description,
    rating,
  } = product;
  return (
    <>
      <tr className='shadow-md shadow-red-400 rounded-lg'>
        <th>
          <label>
            <input type='checkbox' className='checkbox' />
          </label>
        </th>
        <td>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={product_img} />
              </div>
            </div>
            <div>
              <div className='font-bold'>{product_name}</div>
            </div>
          </div>
        </td>
        <td>{description}</td>
        <td>{price}</td>
        <th>
          <Link to={`/products/${id}`}>
            <button className='btn btn-ghost btn-xs'>details</button>
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ProductsRow;
