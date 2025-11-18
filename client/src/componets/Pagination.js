import React from "react";


const Pagination = ({ page, setPage, totalItems, itemsPerPage }) => {
  const startIndex = (page - 1) * itemsPerPage;

  return (
    <>
      <div className="hidden md:flex fixed bottom-0 left-0 w-full justify-center gap-6 bg-white py-4 shadow-lg border-t z-50">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700">Page {page}</span>

        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
          disabled={startIndex + itemsPerPage >= totalItems}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-center gap-3 bg-white py-4 shadow-lg border-t z-50">
        <button
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700 self-center">
          Page {page}
        </span>

        <button
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-40"
          disabled={startIndex + itemsPerPage >= totalItems}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;

