import movies from "../../data/movies.json"

const allYears = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);
const allGenres = [...new Set(movies.flatMap(movie => movie.genres || []))].sort();

const Filter = ({
    pendingFilters,
    onFilterChange,
    onApplyFilters,
    onClearFilters
}) => {
    return (
        <div className="p-6 rounded-lg shadow-xl sticky top-4 space-y-6 border-1 border-gray-800">
            <h2 className="text-2xl font-extrabold mb-4 pb-2">Filter by</h2>

            <div>
                <label htmlFor="minRating" className="block text-lg font-medium mb-2">
                    Rating: <span className="font-bold">{pendingFilters.minRating.toFixed(1)}</span>
                </label>
                <input
                    type="range"
                    id="minRating"
                    name="minRating"
                    min="0"
                    max="10"
                    step="0.1"
                    value={pendingFilters.minRating}
                    onChange={onFilterChange}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-range-slider"
                />
            </div>

            <div>
                <label htmlFor="selectedYear" className="block text-lg font-medium mb-2">
                    Year
                </label>
                <select
                    id="selectedYear"
                    name="selectedYear"
                    value={pendingFilters.selectedYear}
                    onChange={onFilterChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md shadow-sm border border-gray-300"
                >
                    <option value="">All Years</option>
                    {allYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="selectedGenre" className="block text-lg font-medium mb-2">
                    Genre
                </label>
                <select
                    id="selectedGenre"
                    name="selectedGenre"
                    value={pendingFilters.selectedGenre}
                    onChange={onFilterChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md shadow-sm border border-gray-300"
                >
                    <option value="">All Genres</option>
                    {allGenres.map(genre => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <div className="pt-4 flex justify-between space-x-2 mt-6">
                <button
                    onClick={onClearFilters}
                    className="flex-1 px-4 py-2 text-sm font-semibold rounded-md text-white transition hover:bg-gray-800 bg-gray-600"
                >
                    Clear Filters
                </button>
                <button
                    onClick={onApplyFilters}
                    className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-800 transition shadow-md"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default Filter;