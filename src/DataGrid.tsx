import type { GridColumn, GridRow } from "./types";

type DataGridProps<T> = {
  columns: GridColumn<T>[];
  rows: GridRow<T>[];
};

export function DataGrid<T>({ columns, rows }: DataGridProps<T>) {
  return (
    <div
      role="grid"
      aria-rowcount={rows.length}
      aria-colcount={columns.length}
      className="border border-[hsl(var(--color-border))] bg-[hsl(var(--color-bg))]"
    >
      {/* Header will go here */}
      {/* Body will go here */}
    </div>
  );
}
