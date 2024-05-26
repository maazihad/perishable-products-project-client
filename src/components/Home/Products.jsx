import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";


const Products = () => {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3000/products")
         .then(res => res.json())
         .then(data => setProducts(data));
   }, []);



   return (
      <section>
         <div className="flex justify-center">
            <h2 className="w-6/12 rounded-md shadow-md lg:text-4xl md:text-3xl text-xl font-bold text-center text-red-500 my-5 md:bg-red-100  py-5 px-2">Perishable & Handmade Products</h2>
         </div>
         <div className="md:flex flex-wrap gap-2 my-5 justify-between">
            {
               products.map(product => <ProductCart
                  key={product.id}
                  product={product}
               ></ProductCart>)
            }
         </div>
      </section>
   );
};

export default Products;