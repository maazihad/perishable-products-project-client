import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Main = () => {
   return (
      <div className="max-w-7xl mx-auto ">
         <Navbar></Navbar>
         <div className="min-h-[calc(100vh-50px)] flex-grow">
            <Outlet />
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;