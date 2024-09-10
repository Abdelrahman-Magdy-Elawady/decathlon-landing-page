import Product from "../../Components/Product";

function ProductsSection({ products, className }) {
  const productsList = products.map((item, index) => (
    <Product product={item} key={index} />
  ));
  return (
    <div className={`grid xl:grid-cols-4  sm:grid-cols-2 ${className}`}>
      {productsList}
    </div>
  );
}

export default ProductsSection;
