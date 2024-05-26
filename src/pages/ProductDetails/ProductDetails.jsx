import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
   const products = useLoaderData();
   console.log(products);
   return (
      <div>
         <h1>Product details</h1>
      </div>
   );
};

export default ProductDetails;