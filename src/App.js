
import './App.css';
import Navbar from './Navbar';
import { ProductData } from "./IndexData";
import React, { useState,  } from "react";
import Login from './Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  let [datatodisplya, setDatatodisplya] = useState(ProductData[0].results);

  return (
    <div className="App">
     <Navbar/>
     <Router>
       <Routes>
         <Route exact path="/Login" element={<Login/>}/>
       </Routes>
     </Router>
    
    <div className="d-flex flex-wrap " style={{ maxHeight: "100%" }}>
    {datatodisplya.map((value,index) => {
          return (
            <div key={index} className="col-xl-4 col-lg-4 col-md-4 cardhover pr1">
              <a
                href="https://www.royaloakindia.com/product/royaloak-melbourne-three-seater-sofa-grey-1610"
                target="_blank"
                title="Royaloak Melbourne Wooden Sofa 1S in Brown Color Cushion"
                className=""
                itemprop="url"
                style={{ textdecoration: "none", width: "100%" }}
              >
                <img
                  className="img-responsive b-lazy  b-loaded"
                  alt="sofa"
                  src={value.productimage}
                  itemprop="image"
                  style={{ width: "80%", height: "80%",top:"30%" }}
                />
              </a>
              <div className="">
                <h6
                  className="search-box-product-name"
                  style={{ margintop: "2px" }}
                >
                  {value.productname}
                </h6>
                <div className="price-old">
                  <span className="product-price-suggestion-box">
                    Rs {value.sellingprice}
                    <span className="oldPriceBeforeDiscount price-strike ml-2">
                      Rs. {value.mrpprice}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })
        }
        </div>
      </div>
    
    
        
  );
}

export default App;
