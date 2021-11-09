import Item from "./Item";

export default function ShoppingList({Items}) {
  const List = Items.map((item) => (
    <Item
      key={item.id}
      listItem={item}
    />
  ));

  return (
    <table className="shopping-list">
      {Items.length > 0 ? List : <p>No item to show...</p>}
    </table>
  );
}
