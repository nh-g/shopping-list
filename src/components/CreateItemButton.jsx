import React,{useState} from 'react'
export default function CreateItemButton({ toggleAddingItems }) {
  return (
    <div>
      <button className="button" onClick={toggleAddingItems}>
        ＋ Add items
      </button>
    </div>
  );
}
