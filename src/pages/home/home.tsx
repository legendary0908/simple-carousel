import ProductItem from "components/product-item";
import { Swiper } from "components/shared";
import { items } from "./data";
import "./home.styles.scss";

const ITEM_WIDTH = 200;

const Home = () => {
  return (
    <div className="container">
      <Swiper itemWidth={ITEM_WIDTH}>
        {items.map((item, idx) => (
          <ProductItem key={idx} itemWidth={ITEM_WIDTH} data={item} />
        ))}
      </Swiper>
    </div>
  );
};
export default Home;
