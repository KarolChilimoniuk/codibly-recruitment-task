import { Dispatch } from "redux";
import { AxiosError, AxiosResponse } from "axios";
import instance from "./axiosInstance";
import { getItemSuccess, getItemFailure } from "../../actions/actions";

export const fetchItem = async (
  dispatch: Dispatch,
  itemId: string
): Promise<void> => {
  await instance
    .get(`/products/${itemId}`)
    .then((res: AxiosResponse) => {
      dispatch(getItemSuccess(res.data.data, res.status, "OK"));
    })
    .catch((err: AxiosError) => {
      if (err.response) {
        err.response.status > 500 &&
          dispatch(getItemFailure(err.response.status, "Server error"));
        err.response.status > 400 &&
          dispatch(
            getItemFailure(
              err.response.status,
              "Item not found or your request isn't allowed"
            )
          );
      }
    });
};
