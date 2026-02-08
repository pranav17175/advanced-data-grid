import type React from "react";

export type GridColumn<T> = {
  id: string;
  header: string;
  width: number;

  pinned?: "left" | "right";

  renderCell: (row: T) => React.ReactNode;

  editor?: {
    render: (
      value: unknown,
      onChange: (value: unknown) => void
    ) => React.ReactNode;
    validate?: (value: unknown) => Promise<boolean>;
  };

  sortable?: boolean;
  resizable?: boolean;
};

export type GridRow<T> = {
  id: string;
  data: T;
};
