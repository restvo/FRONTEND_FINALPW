import React from 'react';
import Row from 'react-bootstrap/Row';
import Product from './Product';

const Shop = (props) => {

  return (
    <div className='row-wrapper'>
      <Row>
        {props.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </div>
  )

};

export default Shop;