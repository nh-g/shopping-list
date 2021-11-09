// NPM Packages
import { useState } from "react";

// Project files
import { useList } from "../state/ListProvider";
import {
  sortByString,
  sortByNumberDescending,
  sortByNumberAscending,
} from "../scripts/list-sorter";

export default function SortControl() {
  // Global state
  const { list, dispatch } = useList();

  const [activeSort, setActiveSort] = useState("");
  const [sortAscending, setSortAscending] = useState(false);
  const toggleSortAscending = () => setSortAscending(!sortAscending);

  function sortListByName(list, key) {
    const sortedList = sortByString(list, key);
    setActiveSort("name");
    dispatch({ type: "replaceList", editedList: sortedList });
  }

  function sortListByPriceDescending(list, key) {
    const sortedList = sortByNumberDescending(list, key);
    setActiveSort("price");
    dispatch({ type: "replaceList", editedList: sortedList });
  }

  function sortListByPriceAscending(list, key) {
    const sortedList = sortByNumberAscending(list, key);
    setActiveSort("price");
    dispatch({ type: "replaceList", editedList: sortedList });
  }

  function sortListByDateDescending(list, key) {
    const sortedList = sortByNumberDescending(list, key);
    setActiveSort("date");
    dispatch({ type: "replaceList", editedList: sortedList });
  }

  function sortListByDateAscending(list, key) {
    const sortedList = sortByNumberAscending(list, key);
    setActiveSort("date");
    dispatch({ type: "replaceList", editedList: sortedList });
  }

  return (
    <section className="sort-controls">
      {/* <img src={SorterImg} alt="Sorter Icon" /> */}
      {/* <span className="label"> Sort by: </span> */}
      <span className="box">
        <button
          className={`button-toggler ${activeSort === "name" ? "active" : ""}`}
          onClick={() => sortListByName(list, "name")}
        >
          Name
        </button>

        <button
          className={`button-toggler ${activeSort === "price" ? "active" : ""}`}
          onClick={() => {
            toggleSortAscending();
            sortAscending
              ? sortListByPriceDescending(list, "price")
              : sortListByPriceAscending(list, "price");
          }}
        >
          <span>{sortAscending ? "▼" : "▲"}Price</span>
        </button>

        <button
          className={`button-toggler ${activeSort === "date" ? "active" : ""}`}
          onClick={() => {
            toggleSortAscending();
            sortAscending
              ? sortListByDateDescending(list, "id")
              : sortListByDateAscending(list, "id");
          }}
        >
          <span>{sortAscending ? "▼" : "▲"}Date</span>
        </button>
      </span>
    </section>
  );
}
