import Item from "./Item";

export default function ShoppingList({shoppingListItems, editList, removeItem,}) {
  const List = shoppingListItems.map((item) => (
    <Item
      key={item.id}
      listItem={item}
      editList={editList}
      removeItem={removeItem}
    />
  ));

  return (
    <table className="shopping-list">
      {shoppingListItems.length > 0 ? List : <p>No item to show...</p>}
    </table>
  );
}
