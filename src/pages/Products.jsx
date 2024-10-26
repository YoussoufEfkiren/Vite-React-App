import ProductCard from "../components/Cards"

import fancyProductImage from '../assets/crewneck.jpg';
import specialItemImage from '../assets/hoodie.avif';
import saleItemImage from '../assets/jeans.avif';
import popularItemImage from '../assets/t-shirt.webp';

function Products() {

  return (
    
    <>
    <div className="container mt-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <ProductCard title="Fancy Product" price="80.00" imageSrc={fancyProductImage} />
      <ProductCard title="Special Item" price="20.00" salePrice="18.00" isOnSale imageSrc={specialItemImage} />
      <ProductCard title="Sale Item" price="50.00" salePrice="25.00" isOnSale imageSrc={saleItemImage} />
      <ProductCard title="Popular Item" price="40.00" imageSrc={popularItemImage} />
    </div>
  </div>
    </>
  )
}

export default Products
