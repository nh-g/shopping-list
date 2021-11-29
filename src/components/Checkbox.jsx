export default function Checkbox({ checked, onChange }) {
  return (
    <label className="custom-checkbox">
      <input
        data-testid="checkbox"
        onChange={onChange}
        type="checkbox"
        checked={checked}
      />
      <div className={`icon-checkMark ${checked && "checked"}`}></div>
    </label>
  );
}
