import React from 'react';
import './product.styles.scss';

const ProductPage = ({match, history}) => {
  console.log('Product Page Match:', match);
  console.log('Product Page History:', history);
  const { params: { productId } } = match;
  return (
    <div>
      {`This is the Product Page for ${productId}`}
    </div>
  )
}

export default ProductPage;
