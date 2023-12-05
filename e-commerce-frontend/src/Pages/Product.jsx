import React from 'react';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';
import allProducts from '../Components/Assets/all_product'; 
const Product = () => {
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}

export default Product;


