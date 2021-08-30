import FormDataField from './FormDataField';
export default function ItemForm({ formEventHandler, formData }) {
    const { errors, touched, values } = formData;
    const { handleBlur, handleChange } = formEventHandler;

  return (
          <> 
        {/* <h4>Add item to your list</h4> */}
        <FormDataField
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
          fieldName={"productName"}
          inputType={"text"}
          placeholder="e.g. VÖXLOV"
          label={"What's product name? *"}
        />
        <span className="error">
          {touched.productName && errors.productName}
        </span>

        <FormDataField
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
          fieldName={"price"}
          inputType={"number"}
          placeholder="e.g. 100"
          label={"What's product price? *"}
        />
        <span className="error">{touched.price && errors.price}</span>

        <div className="form-group">
          <label htmlFor="quantity">How many items? </label>
          <input
            type="number"
            className="input"
            id="quantity"
            placeholder="e.g. 29"
            value={values.quantity || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="quantity"
            min="0"
            required
          />
        </div>
        </>
  );
}
