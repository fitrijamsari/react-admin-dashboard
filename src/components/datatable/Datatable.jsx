import "./datatable.scss";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Datatable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <Button variant="outlined" size="small">
                View
              </Button>
              {/* <div className="viewButton">View</div> */}
            </Link>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </Button>
            {/* <div className="deleteButton">Delete</div> */}
          </div>
        );
      },
    },
  ];
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  return (
    <div className="datatable">
      <div className="datatableTitle">
        User List
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="medium">
            Add New
          </Button>
        </Link>
      </div>

      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
