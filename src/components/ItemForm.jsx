import React, {useState, useEffect, useRef} from 'react'

export default function TodoForm(props) {
    // const [input, setInput] = useState("")
    const [input, setInput] = useState(props.edit ? props.edit.value : ""); // to display the current value before edit

    const inputRef = useRef(null)
    
    useEffect(() => {
        inputRef.current.focus()
    })

    // Handle change
    const handleChange = e => {
        setInput(e.target.value)
    }
    // Handle submit to prevent from reloading page when click to Add button
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input
        })
        setInput('')
    }

    return (
      <form className="form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              className="input edit"
              placeholder="Update your todo"
              value={input}
              name="text"
              ref={inputRef}
              onChange={handleChange}
            />
            <button className="button edit">Update</button>
          </>
        ) : (
          <>
            <input
              className="input"
              placeholder="Add a todo"
              value={input}
              name="text"
              ref={inputRef}
              onChange={handleChange}
            />
            {/* <button className="button">Add</button> */}
          </>
        )}
      </form>
    );
}

