import SorterImg from "../assets/images/sorter.svg";
export default function SortControl({
  list,
  activeSort,
  sortListByName,
  sortListByPrice,
}) {
  // Sorting logic should be here not in the parent.
  // and then just ask for the list and setList or send back an edited list to the parent via a callback
  // to update the result over there.
  return (
    <section className="sort-controls">
      <img src={SorterImg} alt="Sorter Icon" />
      <span className="label"> Sort by:</span>
      <button
        className={`sort-toggler ${activeSort === "name" ? "active" : ""}`}
        onClick={() => sortListByName(list, "name")}
      >
        Name
      </button>

      <button
        className={`sort-toggler ${activeSort === "price" ? "active" : ""}`}
        onClick={() => sortListByPrice(list, "price")}
      >
        Price
      </button>
    </section>
  );
}
