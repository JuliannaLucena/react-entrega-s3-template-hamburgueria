import { ProductCard } from "./ProductCard/index";
import style from ".//style.module.scss"

export const ProductList = ({ productList }) => {
   return (
      <ul className={style.listProducts}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
