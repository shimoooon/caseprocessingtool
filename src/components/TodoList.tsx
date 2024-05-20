import React from 'react';
import './TodoList.css';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



interface TodoListProps {
    items: { id: string, text: string, database: string}[];
    onDeleteTodo: (id: string) => void;
}


// View task list process
const TodoList: React.FC<TodoListProps> = props => {

    const columns: GridColDef[] = [
        { field: 'databaseNumber', headerName: 'DataBase Number', width: 150, editable: true },
        { field: 'sponsorNumber', headerName: 'Sponsor Number', width: 150, editable: true },
        {field: 'actions', headerName: 'Delete', width: 150, renderCell: function render({ row }) {
                return (
                    <div>
                        {props.items.map(todo => (
                            <div key = { todo.id }>
                                <IconButton onClick={props.onDeleteTodo.bind(null, todo.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        ))}
                    </div>
                )
            },
        }
    ];

    return (
    
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rowHeight={50} columns={columns}
            rows = {props.items.map(todo => (
                    {id:todo.id, databaseNumber:todo.text, sponsorNumber:todo.database}
            ))}
            getRowId={(row) => row.id}
            autoHeight
            />
        </div>
    )
};



export default TodoList;