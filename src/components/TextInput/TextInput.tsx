import { useState } from "react";
import { TextField } from "@mui/material";
import { regexValidator } from "../../utils/textInput";
import { InputProps } from "../../types/types";

const TextInput = ({ inputFilterValueHandler }: InputProps): JSX.Element => {
  const [numbers, setNumbers] = useState<string>("");

  return (
    <TextField
      type="text"
      id="standard-basic"
      label="Search item by id"
      variant="standard"
      sx={{
        input: {
          color: "rgb(255,255,255)",
          borderBottom: "2px solid rgb(255,255,255)",
        },
        label: { color: "rgb(255,255,255)" },
      }}
      onChange={(e) => regexValidator(e, setNumbers, inputFilterValueHandler)}
      value={numbers}
    />
  );
};

export default TextInput;
