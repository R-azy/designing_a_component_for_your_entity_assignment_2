// write product card here
// write product card here
import React from 'react'
import Button from './button.jsx';
const productcard = () => {
  const image =
    "https://imgd.aeplcdn.com/664x374/n/cw/ec/47278/m8-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80";
  const name = "Product Name";
  const price = "$99.99";
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <Button />
      </div>
    </>
  );
}

export default productcard