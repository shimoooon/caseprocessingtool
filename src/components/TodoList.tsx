import React from "react";
import "./TodoList.css";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../TodoModel";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  todoUpdateHandler: (todo: Todo) => void;
}

// View task list process
const TodoList: React.FC<TodoListProps> = (props) => {
  const columns: GridColDef[] = [
    {
      field: "databaseNumber",
      headerName: "DataBase Number",
      width: 150,
      editable: true,
    },
    {
      field: "text",
      headerName: "text",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Delete",
      width: 150,
      renderCell: function render({ row }) {
        return (
          <div>
            {props.items.map((todo) => (
              <div key={todo.id}>
                <IconButton onClick={props.onDeleteTodo.bind(null, row.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rowHeight={50}
        columns={columns}
        rows={props.items.map((todo) => ({
          id: todo.id,
          text: todo.text,
          databaseNumber: todo.database,
        }))}
        getRowId={(row) => row.id}
        autoHeight
        processRowUpdate={(newRow) => {
          props.todoUpdateHandler(newRow);
        }}
      />
    </div>
  );
};

export default TodoList;
