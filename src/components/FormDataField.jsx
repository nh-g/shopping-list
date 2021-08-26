export default function FormDataField({
  // errors,
  // touched,
  handleBlur,
  handleChange,
  values,
  fieldName,
  inputType,
  placeholder,
  label,
}) {
  // console.log("DF ERRORS", errors)
  // console.log("DF TOUCHED", touched);
  return (
    <div className="form-group">
      <label htmlFor={`${fieldName} input`}>{label}</label>
      <input
        type={inputType}
        className="input"
        id={`${fieldName} input`}
        placeholder={placeholder}
        value={values.fieldName}
        onChange={handleChange}
        onBlur={handleBlur}
        name={fieldName}
        required
      />
    </div>
  );
}
