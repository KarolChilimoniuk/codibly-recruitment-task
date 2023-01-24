import { IItem } from "../interfaces/interfaces";

export type ItemsState = {
  items: Array<IItem>;
  status: number;
};

export type ItemActionSuccess = {
  type: string;
  payloads: Array<IItem>;
};

export type ItemActionFailure = {
  type: string;
  payloads: number;
};
