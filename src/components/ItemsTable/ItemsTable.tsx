import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import ItemModal from "../Modal/ItemModal";
import { fetchItem } from "../../services/itemsApi/fetchItem";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { ItemsTableProps } from "../../types/types";
import { IRootReducer } from "../../interfaces/interfaces";

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
                key={item.id}
                sx={{
                  backgroundColor: `${item.color}`,
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "rgba(10, 25, 41, 1)" },
                  "&:hover td": { color: "rgb(255,255,255)" },
                }}
              >
                <ItemModal item={item} text={`${item.id}`} />
                <ItemModal item={item} text={`${item.name}`} />
                <ItemModal item={item} text={`${item.color}`} />
                <ItemModal item={item} text={`${item.year}`} />
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
              <ItemModal
                item={appData.fetchedData.filteredItem}
                text={`${appData.fetchedData.filteredItem.id}`}
              />
              <ItemModal
                item={appData.fetchedData.filteredItem}
                text={`${appData.fetchedData.filteredItem.name}`}
              />
              <ItemModal
                item={appData.fetchedData.filteredItem}
                text={`${appData.fetchedData.filteredItem.color}`}
              />
              <ItemModal
                item={appData.fetchedData.filteredItem}
                text={`${appData.fetchedData.filteredItem.year}`}
              />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ItemsTable;
