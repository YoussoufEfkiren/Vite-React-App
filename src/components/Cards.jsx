// ProductCard.js
import styled from 'styled-components';

const ProductImage = styled.img`
  background-color: #e9ecef;
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

const SaleBadge = styled.span`
  background-color: #dc3545;
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.85rem;
  border-radius: 0.25rem;
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  color: #6c757d;
`;

const CurrentPrice = styled.p`
  color: black;
  font-weight: bold;
`;

// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, price, salePrice, isOnSale, imageSrc }) => (
  <div className="col">
    <div className="card border-0 shadow-sm position-relative">
      <ProductImage src={imageSrc} alt={title} />
      {isOnSale && <SaleBadge>Sale</SaleBadge>}
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        {isOnSale && <OldPrice>${price}</OldPrice>}
        <CurrentPrice>${isOnSale ? salePrice : price}</CurrentPrice>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
