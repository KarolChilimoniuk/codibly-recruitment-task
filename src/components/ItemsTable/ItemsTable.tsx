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
} from "@mui/material";
import ItemModal from "../Modal/ItemModal";
import Pagination from "../Pagination/Pagination";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { IRootReducer, IItem } from "../../interfaces/interfaces";

const ItemsTable = (): JSX.Element => {
  const appData = useSelector((state: IRootReducer) => state);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    fetchItems(dispatch, appData.fetchedData.pageNumber);
  }, [appData.fetchedData.pageNumber]);

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
          {appData.fetchedData.itemsToDisplay !== null &&
            appData.fetchedData.itemsToDisplay
              .filter((el, index) => index < 5)
              .map((item) => (
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
        </TableBody>
      </Table>
      <Pagination amountOfItems={appData.fetchedData.itemsData.total - 2} />
    </Card>
  );
};

export default ItemsTable;
