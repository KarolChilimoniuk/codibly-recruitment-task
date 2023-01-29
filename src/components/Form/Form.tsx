import { FormControl } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import FormButton from "../FormButton/FormButton";

const Form = (): JSX.Element => {
  return (
    <FormControl>
      <TextInput />
      <FormButton text={"Search"} />
    </FormControl>
  );
};

export default Form;
