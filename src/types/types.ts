import { IItemsData, IItem } from "../interfaces/interfaces";

export type ItemActionSuccess = {
  type: string;
  payloads: {
    itemsData: IItemsData;
    statusCode: number;
    statusMessage: string;
  };
};

export type ItemActionFailure = {
  type: string;
  payloads: { statusCode: number; statusMessage: string };
};

export type ButtonProps = {
  text: string;
};

export type ItemsTableProps = {
  items: Array<IItem>;
  perPage: number;
};
