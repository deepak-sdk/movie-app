import React, { useState } from "react";
import './TodoList.css'

export const TodoList = () => {
    const [item, setItem] = useState("");
    const [itemList, setItemList] = useState([]);

    const handleClick = () => {
        setItemList((prevItems) => [...prevItems, { item, isDone: false }]);
        setItem("");
    };

    const handleItemClass = (index) => {
        setItemList(
            itemList.map((el) => {
                if (el === itemList[index]) {
                    el.isDone = !el.isDone;
                }
                return el;
            })
        );
    };

    console.log(itemList);
    return (
        <div>
            <>
                <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                        setItem(e.target.value);
                    }}
                />
                <button onClick={handleClick}>Add</button>
            </>

            <>
                <p>
                    {itemList.filter((el) => el.isDone).length} completed from {""}
                    {itemList.length}
                </p>
            </>
            <>
                <ul>
                    {itemList.map((itemCurrent, i) => (
                        <li
                            key={i}
                            onClick={() => handleItemClass(i)}
                            className={itemCurrent.isDone ? "is-done" : "not-done"}
                        >
                            {itemCurrent.item}
                        </li>
                    ))}
                </ul>
            </>

        </div>
    );
};
