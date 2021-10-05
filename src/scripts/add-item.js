export const requestNewItem = (values) => {
  const newItem = {
    id: Math.floor(Math.random() * 100000),
    productName: values.productName.toUpperCase(),
    price: values.price,
    quantity: values.quantity,
    isComplete: false,
    imageURL: "",
  };

  return newItem;
};
