import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchItem } from "../../services/itemsApi/fetchItem";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { ItemsTableProps } from "../../types/types";
import { IRootReducer } from "../../interfaces/interfaces";
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";

const ItemsTable = ({ perPage }: ItemsTableProps): JSX.Element => {
  const appData = useSelector((state: IRootReducer) => state);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    appData.fetchedData.filterValue !== "" &&
      fetchItem(dispatch, appData.fetchedData.filterValue);
    appData.fetchedData.filterValue === "" && fetchItems(dispatch);
  }, [appData.fetchedData.filterValue]);

  return (
    <Card sx={{ marginTop: "30px" }}>
      <Table>
        <TableHead sx={{ backgroundColor: "rgba(10, 25, 41, 0.7)" }}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appData.fetchedData.filterValue === "" &&
            appData.fetchedData.itemsData.data.map((item) => (
              <TableRow
                sx={{
                  backgroundColor: `${item.color}`,
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgba(10, 25, 41, 1)" },
                  "&:hover td": { color: "rgb(255,255,255)" },
                }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.color}</TableCell>
                <TableCell>{item.year}</TableCell>
              </TableRow>
            ))}
          {appData.fetchedData.filteredItem !== null && (
            <TableRow
              sx={{
                backgroundColor: `${appData.fetchedData.filteredItem.color}`,
                cursor: "pointer",
                "&:hover": { backgroundColor: "rgba(10, 25, 41, 1)" },
              }}
            >
              <TableCell>{appData.fetchedData.filteredItem.id}</TableCell>
              <TableCell>{appData.fetchedData.filteredItem.name}</TableCell>
              <TableCell>{appData.fetchedData.filteredItem.color}</TableCell>
              <TableCell>{appData.fetchedData.filteredItem.year}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ItemsTable;
