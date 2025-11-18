import React, { useState } from "react";
import CompanyList from "./componets/CompanyList.js";
import FilterControls from "./componets/FilterControls.js";
import Navbar from "./componets/Navbar.js";

const App = () => {
  const [filters, setFilters] = useState({});
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FilterControls onFilter={setFilters} />
      <CompanyList filters={filters} />
    </div>
  );
};

export default App;
