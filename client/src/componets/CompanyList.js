import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const CompanyList = ({ filters }) => {
  const [companies, setCompanies] = useState([]);
  const [warning, setWarning] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const query = new URLSearchParams(filters).toString();
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/api/companies?${query}`
        );
        setCompanies(res.data);
        setWarning(res.data.length === 0 ? "No companies found." : "");
        setPage(1);
      } catch (err) {
        console.error(err);
        setWarning("Error fetching data.");
      }
    };
    fetchCompanies();
  }, [filters]);

  const sortedCompanies = [...companies].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "industry") return a.industry.localeCompare(b.industry);
    if (sortBy === "location") return a.location.localeCompare(b.location);
    return 0;
  });

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedCompanies = sortedCompanies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex-1 px-4 sm:px-20 xl:px-32 pb-28 mt-24">
      {warning && (
        <div className="text-center bg-yellow-100 text-yellow-700 py-2 rounded-lg mb-4 font-medium shadow-sm">
          {warning}
        </div>
      )}

      <div className="flex justify-end mb-4">
        <select
          className="border px-3 py-2 rounded-md shadow"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">A-Z Company</option>
          <option value="industry">A-Z Industry</option>
          <option value="location">A-Z Location</option>
        </select>
      </div>

      <div className="hidden md:block overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Company</th>
              <th className="px-4 py-3 text-left">Industry</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Tech Stack</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-800">
            {paginatedCompanies.map((c) => (
              <tr key={c._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-semibold">{c.name}</td>
                <td className="px-4 py-3">{c.industry}</td>
                <td className="px-4 py-3">{c.location}</td>
                <td className="px-4 py-3 flex flex-wrap gap-2">
                  {c.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col space-y-4">
        {paginatedCompanies.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200"
          >
            <h3 className="text-lg font-bold text-gray-900">{c.name}</h3>
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Industry:</span> {c.industry}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-semibold">Location:</span> {c.location}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {c.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalItems={sortedCompanies.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default CompanyList;
