export const regexValidator = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setNumHandler: any,
  inputFilterValueHandler: any
): void => {
  const regex = /^[0-9]+$/;
  const target = e.target as HTMLTextAreaElement;
  if (target.value === "" || regex.test(target.value)) {
    setNumHandler(target.value);
    inputFilterValueHandler(target.value);
  }
};
