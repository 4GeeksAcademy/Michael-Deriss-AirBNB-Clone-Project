type CatalogSortProps = {
  sortOrder: 'high' | 'low';
  setSortOrder: (order: 'high' | 'low') => void;
  t?: Record<string, string>;
};

const CatalogSort = ({ sortOrder, setSortOrder, t = {} }: CatalogSortProps) => (
  <div className="flex gap-2 items-center mb-2">
    <span className="text-gray-600">{t.sortByPrice || "Sort by price:"}</span>
    <button
      className={`px-3 py-1 rounded-full border ${sortOrder === 'low' ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
      onClick={() => setSortOrder('low')}
    >
      {t.low || "Low"}
    </button>
    <button
      className={`px-3 py-1 rounded-full border ${sortOrder === 'high' ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
      onClick={() => setSortOrder('high')}
    >
      {t.high || "High"}
    </button>
  </div>
);

export default CatalogSort;
