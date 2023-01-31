import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TablePagination } from "@mui/material";
import { PaginationProps } from "../../types/types";
import { changePageNumber } from "../../actions/actions";

const Pagination = ({ amountOfItems }: PaginationProps): JSX.Element => {
  const dispatch = useDispatch();
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 5,
  });

  const handlePageChange = (event: any, newPage: number): void => {
    setController({
      ...controller,
      page: newPage,
    });
  };

  useEffect(() => {
    dispatch(changePageNumber(controller.page + 1));
  }, [controller.page]);

  return (
    <>
      <TablePagination
        sx={{ backgroundColor: "rgba(10, 25, 41, 0.7)" }}
        component="div"
        onPageChange={handlePageChange}
        page={controller.page}
        count={amountOfItems}
        rowsPerPage={controller.rowsPerPage}
      />
    </>
  );
};

export default Pagination;
