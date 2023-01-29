import { useEffect, useState, useMemo } from "react";
import MaterialReactTable from "material-react-table";
import type { MRT_ColumnDef } from "material-react-table";
import { ItemsTableProps } from "../../types/types";
import { IItem, ITableData } from "../../interfaces/interfaces";

const ItemsTable = ({ items, perPage }: ItemsTableProps): JSX.Element => {
  const [rows, setRows] = useState<Array<IItem>>([]);
  const cols = useMemo<MRT_ColumnDef<ITableData>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        muiTableHeadCellProps: { sx: { color: "rgb(0,0,0)" } },
      },
      {
        accessorKey: "name",
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "rgb(0,0,0)" } },
      },
      {
        accessorKey: "year",
        header: "Year",
        muiTableHeadCellProps: { sx: { color: "rgb(0,0,0)" } },
      },
    ],
    []
  );

  useEffect(() => {
    setRows(items);
  }, [items]);

  return (
    <MaterialReactTable
      columns={cols}
      data={rows}
      enableFilters={false}
      enableGlobalFilter={false}
      manualPagination={true}
    />
  );
};

export default ItemsTable;
