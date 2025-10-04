import { useTheme } from "../context/theme/useTheme"
import Button from "./ui/Button"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [theme, setTheme] = useTheme();
    const iconSize = "xl";
    return (
        <nav className='w-full flex items-center justify-between px-6 lg:px-8 py-2 shadow-2xl'>
            <div className="w-32 sm:w-40">
                {/*  change text with logo here when find something suitable */}

                {/* <Image
                    src="/cinema-logo.png"
                    alt="cinema-app-logo"
                    width={800}
                    height={800}
                    className="w-full object-contain"
                /> */}
                <Link to="/" className="text-decoration-none focus:outline-none">
                    <p className="text-xl line-clamp-3 cursor-pointer hover:opacity-80 transition">Cinema</p>
                </Link>
            </div>
            <div className="flex items-center">
                {/* deprecated icons */}
                <Button className="bg-gray-600 mx-2 my-0 cursor-pointer hover:bg-gray-500" asChild>
                    <a href="https://github.com/adnankovacevic/cinema" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size={iconSize} />
                    </a>
                </Button>
                <Button className="bg-gray-600 mx-2 my-0 cursor-pointer hover:bg-gray-500" asChild>
                    <a href="https://www.linkedin.com/in/adnankovacevic" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
                    </a>
                </Button>
                <Button className={"bg-gray-600 mx-2 my-4 hover:bg-gray-500 cursor-pointer"}>
                    {theme === "light" ?
                        <FontAwesomeIcon
                            icon={faMoon}
                            onClick={() => setTheme("dark")}
                            size={iconSize}
                            className="text-white"
                        /> :
                        <FontAwesomeIcon
                            icon={faSun}
                            onClick={() => setTheme("light")}
                            size={iconSize}
                            className="text-white"
                        />
                    }
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
