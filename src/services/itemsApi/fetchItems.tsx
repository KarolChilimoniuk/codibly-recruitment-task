import { Dispatch } from "redux";
import { AxiosError, AxiosResponse } from "axios";
import instance from "../axiosInstance";
import { getItemsSuccess, getItemsFailure } from "../actions/actions";

export const fetchItems = async (
  url: string,
  dispatch: Dispatch
): Promise<void> => {
  await instance
    .get(url)
    .then((res: AxiosResponse) => {
      dispatch(getItemsSuccess(res.data, res.status, "OK"));
    })
    .catch(
      (err: AxiosError) =>
        err.response &&
        dispatch(getItemsFailure(err.response.status, err.message))
    );
};
