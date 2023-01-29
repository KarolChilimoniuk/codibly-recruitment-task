import Button from "@mui/joy/Button";
import { ButtonProps } from "../../types/types";

const FormButton = ({ text }: ButtonProps): JSX.Element => {
  return (
    <Button
      sx={{
        backgroundColor: "rgb(0,120,0)",
        marginTop: "10px",
        "&:hover": {
          backgroundColor: "rgb(7, 177, 77, 0.42)",
        },
      }}
      onClick={function () {}}
    >
      {text}
    </Button>
  );
};

export default FormButton;
