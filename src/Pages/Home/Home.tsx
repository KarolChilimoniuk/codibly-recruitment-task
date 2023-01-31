import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import Form from "../../components/Form/Form";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { IRootReducer } from "../../interfaces/interfaces";

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const appData = useSelector((state: IRootReducer) => state);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems(dispatch, 1);
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
      <h2>Codibly recruitment task</h2>{" "}
      {appData.fetchedData.statusCode > 400 && (
        <>
          <p>{appData.fetchedData.statusCode}</p>
          <p>{appData.fetchedData.statusMessage}</p>
        </>
      )}
      <Form />
      {appData.fetchedData.itemsToDisplay === null && <h2>Loading ...</h2>}
      <ItemsTable />
    </Container>
  );
};

export default HomePage;
