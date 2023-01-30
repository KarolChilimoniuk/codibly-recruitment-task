import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitHandler } from "../../utils/form";
import TextInput from "../TextInput/TextInput";
import FormButton from "../FormButton/FormButton";
import styles from "./Form.module.scss";

const Form = (): JSX.Element => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <form
      className={styles.Form}
      onSubmit={(e) => {
        submitHandler(e, dispatch, inputValue);
      }}
    >
      <TextInput inputFilterValueHandler={setInputValue} />
      <FormButton type={"submit"} text={"Search"} />
    </form>
  );
};

export default Form;
