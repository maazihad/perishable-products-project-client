import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {

   const { id, product_name, product_img, description, price, features } = product;

   return (
      <div className="card md:w-96 bg-base-100 shadow-xl">
         <figure className=''><img className='object-cover w-full h-72' src={product_img} alt="Shoes" /></figure>
         <div className="card-body">
            <h2 className="card-title">{product_name}</h2>
            <p> <strong>Product Info :</strong> {description.substring(0, 60)}...</p>
            <p><strong>Price :</strong> ${price}</p>
            <p><strong>Features : </strong>{features}</p>
            <div className="card-actions justify-end">

               <Link to={`/products/${id}`}>
                  <button
                     className="btn btn-sm  btn-primary">
                     See Details
                  </button>
               </Link>

            </div>
         </div>
      </div>
   );
};

ProductCart.propTypes = {
   product: PropTypes.object,
   handleProductDetails: PropTypes.func,
};

export default ProductCart;