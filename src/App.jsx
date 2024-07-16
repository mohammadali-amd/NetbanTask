import { useState } from "react";

import useFetchData from "./hooks/useFetchData";
import Cards from "./components/Cards/Cards"
import Assets from "./components/Assets/Assets"

function App() {
  const { data, loading, error } = useFetchData('/data');
  const [filter, setFilter] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div className="space-y-8 m-4 lg:mx-auto lg:w-fit">
      <Cards data={data} onFilterChange={handleFilterChange} />
      <Assets data={data} filter={filter} />
    </div>
  )
}

export default App
