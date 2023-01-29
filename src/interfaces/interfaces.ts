export interface IItem {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface IItemsData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<IItem>;
}

export interface IAppState {
  itemsData: IItemsData;
  statusCode: number;
  statusMessage: string;
}

export interface ITableData {
  id: number;
  name: string;
  year: number;
}

export interface RootReducer {
  fetchedData: IAppState;
}
