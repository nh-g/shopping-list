// NPM packages
import { RiDeleteBinLine } from "react-icons/ri";

// Project files
import Checkbox from "./Checkbox";
import ImageChooser from "./ImageChooser";

export default function Item({listItem, editList, removeItem}) {
  // Constants
  const { id, productName, price, isComplete, quantity, imageURL } = listItem; 

  // Methods
  function editItem(key, editedValue) {
    const editedItem = { ...listItem };
    editedItem[key] = editedValue;
    editList(editedItem);
  }
  
  return (
    <tr
      className={isComplete ? "shopping-item complete" : "shopping-item"}
      key={id}
    >
      <td>
        <Checkbox checked={isComplete} onChange={() => editItem("isComplete", !isComplete)}/>
      </td>
      <td className="name">{productName}</td>
      <td className="quantity">
        {quantity}
        {quantity ? " pc" : ""}
      </td>
      <td className="price">{price}:-</td>
      <td>      
        <ImageChooser imageURL={imageURL} editItem={editItem} /></td>
      <td>
        <RiDeleteBinLine
          onClick={() => removeItem(id)}
          className="delete-icon"
          style={{ color: "salmon" }}
        />
      </td>
    </tr>
  );
}
