// NPM packages
import { RiDeleteBinLine } from "react-icons/ri";

// Project files
import { useList } from "../state/ListProvider";
import Checkbox from "./Checkbox";
import ImageChooser from "./ImageChooser";

export default function Item({listItem, editList, removeItem}) {
  // Global state
  const { dispatch } = useList();

  // Constants
  const { id, productName, price, isComplete, quantity, imageURL } = listItem;

  // Methods
  function editedItem(item, key, value) {
    const editedItem = item;

    editedItem[key] = value;
    dispatch({ type: "editItem", editedItem });
  }

  return (
    <tr
      className={isComplete ? "shopping-item complete" : "shopping-item"}
      key={id}
    >
      <td>
        <Checkbox
          checked={isComplete}
          onChange={() => editedItem(listItem, "isComplete", !isComplete)}
        />
      </td>
      <td className="name">{productName}</td>
      <td className="quantity">
        {quantity}
        {quantity ? " pc" : ""}
      </td>
      <td className="price">{price}:-</td>
      <td>
        <ImageChooser imageURL={imageURL} onChange={(imageURL) => editedItem(listItem, "imageURL", imageURL)}/>
      </td>
      {/* <td>
        <RiDeleteBinLine
          onClick={() => removeItem(id)}
          className="delete-icon"
          style={{ color: "salmon" }}
        />
      </td> */}
    </tr>
  );
}
