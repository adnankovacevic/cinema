import { useState, useMemo } from 'react';
import movies from "../data/movies.json"
import Card from "../components/ui/Card";
import Filter from "../components/ui/Filter";


const Home = () => {
    const [pendingFilters, setPendingFilters] = useState({
        minRating: 0,
        selectedYear: '',
        selectedGenre: ''
    });

    const [activeFilters, setActiveFilters] = useState(pendingFilters);

    const filteredMovies = useMemo(() => {
        return movies.filter(movie => {
            const passesRating = movie.rating >= activeFilters.minRating;
            const passesYear = activeFilters.selectedYear === '' || movie.year === Number(activeFilters.selectedYear);
            const passesGenre = activeFilters.selectedGenre === '' || movie.genres?.includes(activeFilters.selectedGenre);
            return passesRating && passesYear && passesGenre;
        });
    }, [activeFilters]);

    const onFilterChange = (event) => {
        const { name, value } = event.target;
        const newValue = name === 'minRating' ? Number(value) : value;
        setPendingFilters(prevFilters => ({
            ...prevFilters,
            [name]: newValue
        }));
    };

    const applyFilters = () => {
        setActiveFilters(pendingFilters);
    };

    const clearFilters = () => {
        const defaultFilters = { minRating: 0, selectedYear: '', selectedGenre: '' };
        setPendingFilters(defaultFilters);
        setActiveFilters(defaultFilters);
    };

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 p-4">

            <div className="sm:col-span-4 lg:col-span-3">
                <Filter
                    pendingFilters={pendingFilters}
                    onFilterChange={onFilterChange}
                    onApplyFilters={applyFilters}
                    onClearFilters={clearFilters}
                />
            </div>


            <div className="sm:col-span-8 lg:col-span-9">
                {filteredMovies.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {filteredMovies.map((movie) => (
                            <Card key={movie.id} {...movie} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl mt-10">No movies match your current filters. Try adjusting them!</p>
                )}
            </div>
        </div>
    );
}

export default Home;