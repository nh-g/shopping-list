const validName = (value) => {
  const isNotOnlyWhitespace = value.trim().length > 0;
  return isNotOnlyWhitespace;
};
const validPrice = (value) => {
  const containsOnlyDigits = /^\d+$/.test(value);
  return containsOnlyDigits;
};
// Remove unuused comments

// const validQuantity = (value) => {
//   const containsOnlyDigits = /^\d+$/.test(value);
//   return containsOnlyDigits;
// };


export const valueValidation = (name, price, quantity) => {
  const result = {};
  if (!name) {
    result.name = "Name is required.";
  } else if (!validName(name)) {
    result.name = "Enter a valid name.";
  }
  if (!price) {
    result.price = "Price is required.";
  } else if (!validPrice(price)) {
    result.price = "Price may only contain digits 0 to 9.";
  }
  // if (!validQuantity(quantity)) {
  //   result.quantity = "Quantity may only contain digits 0 to 9.";
  // }

  return result;
};
