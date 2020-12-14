import React from 'react';
import './product.styles.scss';

const ProductPage = ({match, history}) => {
  console.log('Product Page Match:', match);
  console.log('Product Page History:', history);
  const { params: { categoryId, productId } } = match;
  return (
    <div>
      {`This is the Product Page for ${productId} which belongs to the ${categoryId} category`}
    </div>
  )
}

export default ProductPage;
