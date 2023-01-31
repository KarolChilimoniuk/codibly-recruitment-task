import { Dispatch } from "redux";
import { AxiosError, AxiosResponse } from "axios";
import instance from "./axiosInstance";
import { getItemsSuccess, getItemsFailure } from "../../actions/actions";

export const fetchItems = async (
  dispatch: Dispatch,
  page: number
): Promise<void> => {
  await instance
    .get(`/products?page=${page}`)
    .then((res: AxiosResponse) => {
      dispatch(getItemsSuccess(res.data, res.status, "OK"));
    })
    .catch((err: AxiosError) => {
      if (err.response) {
        err.response.status > 500 &&
          dispatch(getItemsFailure(err.response.status, "Server error"));
        err.response.status > 400 &&
          dispatch(
            getItemsFailure(
              err.response.status,
              "Item not found or your request isn't allowed"
            )
          );
      }
    });
};
