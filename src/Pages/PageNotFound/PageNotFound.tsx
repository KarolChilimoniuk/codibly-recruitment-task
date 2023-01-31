import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { IRootReducer } from "../../interfaces/interfaces";

const PageNotFound = (): JSX.Element => {
  const appData = useSelector((state: IRootReducer) => state);

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
      <h2>Error 404 - Page not found :(</h2>
    </Container>
  );
};

export default PageNotFound;
