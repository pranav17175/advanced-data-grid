import { DataGrid } from "./components/DataGrid/DataGrid";

type Person = {
  name: string;
  age: number;
};

const columns = [
  {
    id: "name",
    header: "Name",
    width: 200,
    renderCell: (row: Person) => row.name,
    sortAccessor: (row: Person) => row.name
  },
  {
    id: "age",
    header: "Age",
    width: 100,
    renderCell: (row: Person) => row.age,
    sortAccessor: (row: Person) => row.age
  }
];


const rows = Array.from({ length: 1000 }).map((_, i) => ({
  id: String(i),
  data: { name: `User ${i}`, age: 20 + (i % 30) }
}));

function App() {
  return (
    <div className="p-4">
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}

export default App;
