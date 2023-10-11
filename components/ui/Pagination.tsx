interface IProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
  className?: string;
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  className = "",
}: IProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages === 1) return <></>;

  return (
    <div className={className}>
      <div className="flex justify-end space-x-2">
        {pageNumbers.map((pageNumber: number) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-4 py-2 ${
              pageNumber === currentPage
                ? "bg-vinas-brown-2 text-white"
                : "bg-vinas-gray-2"
            }`}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
