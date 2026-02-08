import { useRef, useState } from "react";
import type { GridColumn, GridRow } from "./types";
import { useRowVirtualization } from "./hooks/useRowVirtualization";

type GridBodyProps<T> = {
  columns: GridColumn<T>[];
  rows: GridRow<T>[];
};

const ROW_HEIGHT = 36;

export function GridBody<T>({ columns, rows }: GridBodyProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [focusedCell, setFocusedCell] = useState({
  row: 0,
  col: 0
});


  const containerHeight = 300;

  const { startIndex, endIndex, offsetTop } = useRowVirtualization(
    rows.length,
    ROW_HEIGHT,
    containerHeight,
    scrollTop
  );

  const visibleRows = rows.slice(startIndex, endIndex);
  function handleKeyDown(e: React.KeyboardEvent) {
  if (e.key === "ArrowDown") {
    setFocusedCell((c) => ({ ...c, row: c.row + 1 }));
  }
  if (e.key === "ArrowUp") {
    setFocusedCell((c) => ({ ...c, row: Math.max(0, c.row - 1) }));
  }
  if (e.key === "ArrowRight") {
    setFocusedCell((c) => ({ ...c, col: c.col + 1 }));
  }
  if (e.key === "ArrowLeft") {
    setFocusedCell((c) => ({ ...c, col: Math.max(0, c.col - 1) }));
  }
}


  return (
    <div
  ref={containerRef}
  role="rowgroup"
  tabIndex={0}
  onKeyDown={handleKeyDown}
  className="overflow-y-auto"
  style={{ height: containerHeight }}
  onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
>
      <div style={{ height: rows.length * ROW_HEIGHT }}>
        <div style={{ transform: `translateY(${offsetTop}px)` }}>
          {visibleRows.map((row, rowIndex) => (
            <div
              key={row.id}
              role="row"
              aria-rowindex={startIndex + rowIndex + 1}
              className="flex border-b border-[hsl(var(--color-border))]"
              style={{ height: ROW_HEIGHT }}
            >
              {columns.map((column, colIndex) => (

               <div
  key={column.id}
  role="gridcell"
  aria-selected={
    focusedCell.row === startIndex + rowIndex &&
    focusedCell.col === colIndex
  }
  tabIndex={
    focusedCell.row === startIndex + rowIndex &&
    focusedCell.col === colIndex
      ? 0
      : -1
  }
  className="px-2 flex items-center outline-none"
  style={{ width: column.width }}
>
  {column.renderCell(row.data)}
</div>

              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
