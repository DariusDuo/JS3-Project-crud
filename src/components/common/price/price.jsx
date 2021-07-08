const Price = (props) => {
  return (
    <div className="price-block">
      <p className="price">
        {props.children} eur sale price: {props.salePrice}
      </p>
    </div>
  );
};

export default Price;
