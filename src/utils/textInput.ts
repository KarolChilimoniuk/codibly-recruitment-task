export const regexValidator = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setNumHandler: any
) => {
  const regex = /^[0-9]+$/;
  const target = e.target as HTMLTextAreaElement;
  (target.value === "" || regex.test(target.value)) &&
    setNumHandler(target.value);
};
