import { useState } from "react";
import SorterImg from "../assets/images/sorter.svg";
import { sortByString, sortByNumber } from "../javaScripts/list-sorter";
export default function SortControl({list,setList}) {

  const [activeSort, setActiveSort] = useState("");

  function sortListByName(list, key) {
    const sortedList = sortByString(list, key);
    setActiveSort("name");
    setList(sortedList);
  }

  function sortListByPrice(list, key) {
    const sortedList = sortByNumber(list, key);
    setActiveSort("price");
    setList(sortedList);
  }

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
