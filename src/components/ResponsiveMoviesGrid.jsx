import movies from "../data/movies.json"
import Card from "./ui/Card"

const ResponsiveMoviesGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
                <Card key={movie.id} {...movie} />
            ))}
        </div>
    )
}

export default ResponsiveMoviesGrid
