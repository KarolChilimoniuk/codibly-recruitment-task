import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import Form from "../../components/Form/Form";
import { fetchItems } from "../../services/itemsApi/fetchItems";
import { IAppState } from "../../interfaces/interfaces";

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch();
  const appData = useSelector((state: IAppState) => state);

  useEffect(() => {
    fetchItems("https://reqres.in/api/products", dispatch);
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
        paddingTop: "20px",
      }}
    >
      <button onClick={() => console.log(appData)} />
      <h2>Homepage</h2>
      <Form />
    </Container>
  );
};

export default HomePage;
