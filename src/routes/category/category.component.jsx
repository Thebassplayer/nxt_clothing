import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { ReactComponent as ArrowLeft } from "../../assets/fontawesom/chevron-left-solid.svg";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <div className="category-nav-contaier">
        <Link to="/shop">
          <ArrowLeft className="category-nav-link link" />
        </Link>
        <h2 className="category-nav-container__title">{category}</h2>
      </div>

      <div className="category-container">
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
