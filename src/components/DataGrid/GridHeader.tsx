import type { GridColumn } from "./types";

type GridHeaderProps<T> = {
  columns: GridColumn<T>[];
  onSort: (
    columnId: string,
    accessor: (row: T) => unknown,
    multi: boolean
  ) => void;
};

export function GridHeader<T>({ columns, onSort }: GridHeaderProps<T>) {
  return (
    <div role="row" className="flex border-b font-medium">
      {columns.map((column) => (
        <div
          key={column.id}
          role="columnheader"
          tabIndex={0}
          className="px-2 cursor-pointer select-none"
          style={{ width: column.width }}
          onClick={(e) =>
            onSort(column.id, column.sortAccessor!, e.shiftKey)
          }
        >
          {column.header}
        </div>
      ))}
    </div>
  );
}
