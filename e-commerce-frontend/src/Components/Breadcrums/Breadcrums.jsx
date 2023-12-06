


import React from 'react';
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrumbs = (props) => {
  const { product } = props;

  return (
    <div className='breadcrumbs'>
      HOME <img src={arrow_icon} alt="" />
      SHOP {product?.category && (
        <>
          <img src={arrow_icon} alt="" /> {product.category}
          {product.name && (
            <>
              <img src={arrow_icon} alt="" /> {product.name}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;