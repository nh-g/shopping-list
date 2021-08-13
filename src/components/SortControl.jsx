import SorterImg from '../assets/images/sorter.svg'
export default function SortControl({ list, activeSort, sortListByName, sortListByPrice }) {

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
