import { useState } from "react";
import type { SortState } from "../types";

export function useSorting<T>() {
  const [sorts, setSorts] = useState<SortState<T>[]>([]);

  function toggleSort(
    columnId: string,
    accessor: (row: T) => unknown,
    multi: boolean
  ) {
    setSorts((prev) => {
      const existing = prev.find((s) => s.columnId === columnId);

      let next: SortState<T>[];

      if (!existing) {
        next = multi ? [...prev, { columnId, direction: "asc", accessor }] : [
          { columnId, direction: "asc", accessor }
        ];
      } else if (existing.direction === "asc") {
        next = prev.map((s) =>
          s.columnId === columnId ? { ...s, direction: "desc" } : s
        );
      } else {
        next = multi
          ? prev.filter((s) => s.columnId !== columnId)
          : [];
      }

      return next;
    });
  }

  return { sorts, toggleSort };
}
