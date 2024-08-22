import React, { useState } from "react";
import './css/styles.css';

function Planner() {
    const [Todoitems, setTodoitems] = useState(["Welcome to Todo site !", "Brush ur teeth"]);
    const [newitem, setNewitem] = useState('')
    function deleteItem(index) {
        setTodoitems(Todoitems.filter((_, i) => i !== index));
    }
    function newitemsubmit(e) {
        e.preventDefault();
        setTodoitems([...Todoitems, newitem]);        
    }

    return (
        <div>
            <div className="box" id="heading">
                <h1>Thursday 22 August</h1>
            </div>
            <div className="box">
                {Todoitems.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <input type="checkbox" />
                            <p>{item}</p>
                            <button onClick={() => deleteItem(index)}>
                                <div className="trash">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#f1f2f3" d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>                                </div>
                            </button>
                        </div>
                    );
                })}
                <form onSubmit={newitemsubmit}>
                    <input type="text" name="newitem" placeholder="New Item" autocomplete="off" onChange={(e) => { setNewitem(e.target.value) }} />
                    <button type="submit"> + </button>
                </form>
            </div>
        </div>
    );
}

export default Planner;
