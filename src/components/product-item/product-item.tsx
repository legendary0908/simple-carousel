import "./product-item.styles.scss";

type IProductItem = {
  imageSrc: string;
  imageAlt: string;
  product: string;
  price: number;
};

type Props = {
  data: IProductItem;
  itemWidth: number;
};

const ProductItem = ({ data, itemWidth }: Props) => {
  const { imageSrc, imageAlt, product, price } = data;

  return (
    <li className="product-item" style={{ width: itemWidth }}>
      <img src={imageSrc} alt={imageAlt} className="image" draggable={false} />
      <p className="description">{product}</p>
      <p className="price">{`$${price}`}</p>
    </li>
  );
};

export default ProductItem;
