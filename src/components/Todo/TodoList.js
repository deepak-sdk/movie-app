import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./TodoList.css";

export const TodoList = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const AddIcon = <ControlPointIcon />;
  const DoneIcon = <HighlightOffIcon />;

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
    <div className="todo-list">
      <div className="input-button">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Mention Todo"
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <Button variant="outlined" onClick={handleClick}>
          Add
        </Button>
      </div>

      <Card>
        <CardContent className="list-text">
          {itemList.filter((el) => el.isDone).length} completed from {""}
          {itemList.length}
        </CardContent>
        <CardActions>
          <ul>
            {itemList.map((itemCurrent, i) => (
              <ListItem key={i} onClick={() => handleItemClass(i)}>
                {itemCurrent.isDone ? (
                  <ListItemIcon>{DoneIcon}</ListItemIcon>
                ) : (
                  <ListItemIcon>{AddIcon}</ListItemIcon>
                )}
                <ListItemText>{itemCurrent.item}</ListItemText>
              </ListItem>
            ))}
          </ul>
        </CardActions>
      </Card>
    </div>
  );
};
