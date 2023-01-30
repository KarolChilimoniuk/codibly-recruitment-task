import Button from "@mui/joy/Button";
import { ButtonProps } from "../../types/types";

const FormButton = ({ text, type }: ButtonProps): JSX.Element => {
  return (
    <Button
      type={type}
      sx={{
        backgroundColor: "rgb(0,120,0)",
        marginTop: "10px",
        "&:hover": {
          backgroundColor: "rgb(7, 177, 77, 0.42)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default FormButton;
