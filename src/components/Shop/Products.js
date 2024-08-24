import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEM = [
  {
    id: "p1",
    title: "Sample Product",
    description: "This is a sample product",
    price: 10.99,
  },
  {
    id: "p2",
    title: "Another Sample Product",
    description: "This is a first product - amazing!",
    price: 100,
  },
];

const Products = (props) => {  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEM.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
