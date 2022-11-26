import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const numOfDisplayedCards = 4;

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="category-preview-container__title" to={title}>
          {title}
        </Link>
      </h2>
      <div className="products-container">
        {products
          .filter((_, index) => index < numOfDisplayedCards)
          .map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
