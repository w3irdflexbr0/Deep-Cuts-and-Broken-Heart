
import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import all_products from "../Components/Assets/all_product";
import { ShopContext } from "../Context/ShopContext";


const ShopCategory = (props) => {

  
  

// eslint-disable-next-line
const [allproducts, setAllProducts] = useState([]); useContext(ShopContext);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])
    
  return (
    <div className="shopcategory">
   <div className="shopcategory-indexSort">
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
        <div className="shopcategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className="shopcategory-products">
        
        {all_products.map((item,i) => {
            if(props.category===item.category)
            {
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;