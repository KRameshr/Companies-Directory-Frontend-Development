import React, { useState } from "react";

const FilterControls = ({ onFilter }) => {
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [tech, setTech] = useState("");

  const handleApply = () => {
    const filters = {};
    if (industry) filters.industry = industry.trim();
    if (location) filters.location = location.trim();
    if (tech) filters.tech = tech.trim();
    onFilter(filters);
  };

  const handleReset = () => {
    setIndustry("");
    setLocation("");
    setTech("");
    onFilter({});
  };

  return (
    <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-3 w-full px-4 sm:px-20 xl:px-32">
      <input
        placeholder="Industry"
        list="industry-options"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
      />
      <datalist id="industry-options">
        <option value="Software" />
        <option value="Media" />
        <option value="AI" />
        <option value="Finance" />
        <option value="Healthcare" />
        <option value="Energy" />
      </datalist>

      <input
        placeholder="Location"
        list="location-options"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
      />
      <datalist id="location-options">
        <option value="Bengaluru" />
        <option value="Mumbai" />
        <option value="Hyderabad" />
        <option value="Pune" />
      </datalist>

      <input
        placeholder="Tech"
        list="tech-options"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
        className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 shadow-sm"
      />
      <datalist id="tech-options">
        <option value="React" />
        <option value="Node.js" />
        <option value="MongoDB" />
        <option value="Python" />
      </datalist>

      <button
        onClick={handleApply}
        className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition"
      >
        Search
      </button>
      <button
        onClick={handleReset}
        className="w-full md:w-auto bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-medium shadow-md transition"
      >
        Reset
      </button>
    </div>
  );
};

export default FilterControls;
