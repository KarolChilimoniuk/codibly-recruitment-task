import { IItemsData, IItem } from "../interfaces/interfaces";

export type ItemActionFetchItemsSuccess = {
  type: string;
  payloads: {
    itemsData: IItemsData;
    statusCode: number;
    statusMessage: string;
  };
};

export type ItemActionFetchItemsFailure = {
  type: string;
  payloads: { statusCode: number; statusMessage: string };
};

export type ItemActionSetFilterValue = {
  type: string;
  payloads: string;
};

export type ItemActionFetchOneItemSuccess = {
  type: string;
  payloads: { filteredItem: IItem; statusCode: number; statusMessage: string };
};

export type ItemActionFetchOneItemFailure = {
  type: string;
  payloads: { statusCode: number; statusMessage: string };
};

export type InputProps = {
  inputFilterValueHandler: any;
};

export type ButtonProps = {
  text: string;
  type: string;
};

export type ItemsTableProps = {
  perPage: number;
};

export type ItemModalProps = {
  item: IItem;
  text: string;
};
