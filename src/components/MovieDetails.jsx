import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movies from "../data/movies.json"


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            // in future will need to call the tmdb API
            // for now I will simulate it  by finding it in local json data file
            const movieData = movies.find(m => m.id === parseInt(movieId));

            setMovie(movieData);
            setLoading(false);
        };

        fetchMovie();
    }, [movieId]);

    if (loading) {
        return <div className="text-center p-12">Loading...</div>;
    }

    if (!movie) {
        return <div className="text-center p-12 text-red-500">Movie not found.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 md:w-1/1">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="lg:w-2/3 space-y-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{movie.title} ({movie.year})</h1>
                    <p className="text-2xl font-semibold text-yellow-500">⭐ {movie.rating}</p>

                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Director:</span> {movie.director || 'N/A'}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Cast:</span> {movie.cast ? movie.cast.join(', ') : 'N/A'}
                    </p>

                    <h2 className="text-xl font-semibold mt-6 text-gray-900 dark:text-white">Synopsis</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {movie.description}
                    </p>

                    <div className="pt-4">
                        <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                            {movie.genres ? movie.genres.join(' | ') : 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;