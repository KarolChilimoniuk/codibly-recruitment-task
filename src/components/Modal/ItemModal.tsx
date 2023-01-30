import { useState } from "react";
import { Box, Modal, Button, TableCell } from "@mui/material";
import { ItemModalProps } from "../../types/types";
import styles from "./ItemModal.module.scss";

const ItemModal = ({ item, text }: ItemModalProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableCell onClick={handleOpen}>{text}</TableCell>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className={styles.Modal_box}>
          <h2 id="child-modal-title">Item details</h2>
          <p id="child-modal-description">
            Id: <span className={styles.Modal_span}>{item.id}</span>
          </p>
          <p id="child-modal-description">
            Name: <span className={styles.Modal_span}>{item.name}</span>
          </p>
          <p id="child-modal-description">
            Year: <span className={styles.Modal_span}>{item.year}</span>
          </p>
          <p id="child-modal-description">
            Color: <span className={styles.Modal_span}>{item.color}</span>
          </p>
          <p id="child-modal-description">
            Pantone value:{" "}
            <span className={styles.Modal_span}>{item.pantone_value}</span>
          </p>
          <Button onClick={handleClose}>Close details</Button>
        </Box>
      </Modal>
    </>
  );
};

export default ItemModal;
