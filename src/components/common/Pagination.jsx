export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pagesToShow = () => {
    const maxVisible = 3;
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + maxVisible - 1);
    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex items-center gap-2 justify-center text-sm mt-4">
      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="w-10 h-10 border border-gray-200 text-lg flex items-center justify-center cursor-pointer transition hover:bg-main-clr hover:text-white"
        disabled={currentPage === 1}
      >
        ❮
      </button>

      {/* Page Numbers */}
      {pagesToShow().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 border border-gray-200 text-lg flex items-center justify-center cursor-pointer transition ${
            currentPage === page
              ? "bg-green-900 text-white"
              : "hover:bg-main-clr hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Prev button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="w-10 h-10 border border-gray-200 text-lg flex items-center justify-center cursor-pointer transition hover:bg-main-clr hover:text-white"
        disabled={currentPage === totalPages}
      >
        ❯
      </button>
    </div>
  );
}
