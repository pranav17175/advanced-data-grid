export type SortDirection = "asc" | "desc";

export type SortState<T> = {
  columnId: string;
  direction: SortDirection;
  accessor: (row: T) => unknown;
};
