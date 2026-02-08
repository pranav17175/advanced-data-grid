import type { GridColumn, GridRow } from "./types";
import { GridHeader } from "./GridHeader";
import { GridBody } from "./GridBody";
import { useSorting } from "./hooks/useSorting";
import { sortRows } from "./utils/sortRows";

type DataGridProps<T> = {
  columns: GridColumn<T>[];
  rows: GridRow<T>[];
};

export function DataGrid<T>({ columns, rows }: DataGridProps<T>) {
  const { sorts, toggleSort } = useSorting<T>();

  const sortedRows = sortRows(rows, sorts);

  return (
    <div role="grid" className="border">
      <GridHeader columns={columns} onSort={toggleSort} />
      <GridBody columns={columns} rows={sortedRows} />
    </div>
  );
}
