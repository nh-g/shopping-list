const word_length = 16;
const number_min = 0;

export const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (fieldValue.trim().length > word_length) {
    return `Name must be less than ${word_length} characters`;
  }
  return null;
};

export const numberValidation = (fieldName, fieldValue) => {
  if (!fieldValue) {
    return `${fieldName} is required`;
  }
  if (fieldValue < number_min) {
    return `${fieldName} must be at least ${number_min}`;
  }
  return null;
};

const validateField = {
  productName: (name) => nameValidation("Product Name", name),
  price: (price) => numberValidation("Price", price),
};

export const validateAll = (values) => {
  return Object.keys(values).reduce(
    (acc, key) => {
      const newError = validate(key, values[key]);
      const newTouched = { [key]: true };
      return {
        errors: {
          ...acc.errors,
          ...(newError && { [key]: newError }),
        },
        touched: {
          ...acc.touched,
          ...newTouched,
        },
      };
    },
    {
      errors: {},
      touched: {},
    }
  );
};

export const validate = (name, value) =>
  validateField[name] ? validateField[name](value) : null;
