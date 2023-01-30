import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import Form from "../../components/Form/Form";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { fetchItem } from "../../services/itemsApi/fetchItem";
import { IRootReducer } from "../../interfaces/interfaces";

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const appData = useSelector((state: IRootReducer) => state);

  useEffect(() => {
    fetchItems(dispatch);
  }, []);

  return (
    <Container
      sx={{
        alignItems: "center",
        backgroundColor: "rgba(10, 25, 41, 1)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vw",
        paddingBottom: "30px",
        paddingLeft: "0px",
        paddingTop: "20px",
        paddingRight: "0px",
      }}
    >
      <button onClick={() => console.log(appData)}>fetchItems</button>
      <button
        onClick={() => fetchItem(dispatch, appData.fetchedData.filterValue)}
      >
        fetchITem
      </button>
      {appData.fetchedData.statusCode > 400 && (
        <p>
          {appData.fetchedData.statusCode}: {appData.fetchedData.statusMessage}
        </p>
      )}
      <Form />
      <ItemsTable perPage={appData.fetchedData.itemsData.per_page} />
    </Container>
  );
};

export default HomePage;
