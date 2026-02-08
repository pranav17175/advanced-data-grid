import type { SortState } from "../types";

export function sortRows<T>(
  rows: { id: string; data: T }[],
  sorts: SortState<T>[]
) {
  if (sorts.length === 0) return rows;

  return [...rows].sort((a, b) => {
    for (const sort of sorts) {
      const aVal = sort.accessor(a.data);
      const bVal = sort.accessor(b.data);

      if (aVal === bVal) continue;

      if (aVal! > bVal!) return sort.direction === "asc" ? 1 : -1;
      if (aVal! < bVal!) return sort.direction === "asc" ? -1 : 1;
    }
    return 0;
  });
}
