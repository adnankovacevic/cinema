import { Link } from 'react-router-dom';
export const Card = ({ id, title, poster, year, description, rating }) => {
    return (
        <Link to={`/movie/${id}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition" >
                <img src={poster} alt={title} className="w-full h-56 object-cover bg-transparent" />
                <div className="space-x-3 py-8 px-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title} <span className="text-sm text-gray-500">({year})</span>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                        {description}
                    </p>
                    <p className="text-sm font-medium text-yellow-500">⭐ {rating}</p>
                </div>
            </div>
        </Link >
    )
}

export default Card
