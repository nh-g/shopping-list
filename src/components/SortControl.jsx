import React, {useState, useEffect} from 'react'
import { sortByString, sortByNumber } from '../javaScripts/list-sorter';

export default function SortControl({list, activeSort}) {
    const [sortList, setSortList] = useState(list)
    useEffect(() => {
        setSortList(list);
    }, [list]);
    
    function sortListByName(list, key) {
        const sortedList = sortByString(list, key)

        // setActiveSort("name");
        setSortList(sortedList)
    }

    function sortListByPrice(list, key) {
        const sortedList = sortByNumber(list, key);

        // setActiveSort("price");
        setSortList(sortedList);
    }

    return (
      <section className="sort-controls">
        <span className="label">Sort by: </span>
        <button
          className={`sort-toggler ${activeSort === "name" ? "active" : ""}`}
          onClick={() => sortListByName}
        >
          Name
        </button>

        <button
          className={`sort-toggler ${activeSort === "price" ? "active" : ""}`}
          onClick={() => sortListByPrice}
        >
          Price
        </button>
      </section>
    );
}
