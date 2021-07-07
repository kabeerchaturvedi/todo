import React from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import { db } from "./firebase";
function Todo(props) {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="todo" secondary={props.todo.todo} />
        </ListItem>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          XX DELETE
        </Button>
      </List>
    </div>
  );
}

export default Todo;
