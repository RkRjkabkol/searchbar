import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ProductData } from "./Data";
import './Navbar.css'

const Navbar = () => {
  let [searchfilter, setSearchfilter] = useState("");
  let [cardToshow, setCardToshow] = useState(false);
  let [datatodisplya, setDatatodisplya] = useState(ProductData[0].results);

  const filterhandler = (e) => {
    setSearchfilter(e.target.value);
  };
  const mouseHandler = () => {
    setCardToshow(!false);
  };
 
  
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar sticky ">
      <a  href="./Navbar">
     <img className="navlogo" src="https://www.royaloakindia.com/images/royaloakindia-logo.webp"
          alt="logo"/> </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="search my-5 my-lg-0">
           
            <div className="d-flex justify-content-center ">
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Enter course or keyword"
                aria-label="Search"
                onChange={filterhandler}
              />
              <AiOutlineSearch className="searchIcon" />
            </div>

        
          </div>

          <div className="ml-auto navitem">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="/dashbord">
                  Refer & Earn
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/about">
                  Demos | Webinars
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/instructor">
                  Join as Instructor
                </a>
              </li>
              
              

              <li className="row align-items-center">
                <a  href="./Login">
                  <button  className="btn btn-primary" type="submit">
                    Login
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {searchfilter ? (
        <div className="suggestionbox ">
          <div
            className="col-md-3 col-lg-3 col-sm-3"
            style={{
              borderRight: "1px solid rgb(214, 214, 214)",
              padding: "0px",
            }}
          >
            <div className="search-box-product-titles">TOP SEARCHES</div>

            <div className="suggestion-list" onMouseMove={mouseHandler}>
              sofas
            </div>
            <div className="search-box-product-titles">TOP COLLECTION</div>
            <div className="suggestion-list fromLeft text-ellipses" style={{ texttransform: "capitalize" }}>
              
            </div>

            <div
              className="suggestion-list fromLeft text-ellipses"
              style={{ texttransform: "capitalize" }}>
              <img
                src="https://www.royaloakindia.com/royaloak-react/public/react-images/pdpFlagsDesk/americandesk.png" alt=""
                width="20" height="14"    />
           <span style={{ paddingleft: "8px" }}>American Collection</span>
            </div>

            <div
              className="suggestion-list fromLeft text-ellipses"
              style={{ texttransform: "capitalize" }}>
              
            </div>
          </div>

          <div
            className="col-md-9 col-lg-9 col-sm-9"
            style={{
              display: "table-column-group",
              padding: "0px 0px 0px 11px",
            }}
          >
            <div className="search-box-product-main-title">
              Popular Products in ‘ American Collection ’
            </div>
            <div className="d-flex flex-wrap " style={{ maxHeight: "100%" }}>
              {cardToshow
                ? datatodisplya.map((value,index) => {
                    return (
                      <div key={index} className="col-xl-4 col-lg-4 col-md-4 cardhover pr1">
                        <a
                          href="https://www.royaloakindia.com/product/royaloak-melbourne-three-seater-sofa-grey-1610"
                         
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
                            style={{ width: "100%", height: "110px" }}
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
                : ""}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Navbar;