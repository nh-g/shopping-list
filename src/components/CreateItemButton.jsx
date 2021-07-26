import React,{useState} from 'react'
export default function CreateItemButton({ toggleCreateItemButton }) {
  return (
    <div>
      <button className="button" onClick={toggleCreateItemButton}>
        ＋ Add items
      </button>
    </div>
  );
}
