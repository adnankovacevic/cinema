import { useTheme } from "../context/theme/useTheme"
import { Moon, Sun } from "lucide-react"
import Button from "./ui/Button"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [theme, setTheme] = useTheme();
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
                {/* <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary" asChild>
                    <Link href="https://github.com/adnankovacevic/cinema-app">
                        <Github size={20} />
                    </Link>
                </Button>
                <Button className="bg-transparent text-secondary-foreground px-2 py-0 hover:bg-secondary" asChild>
                    <Link href="https://www.linkedin.com/in/adnankovacevic">
                        <Linkedin size={20} />
                    </Link>
                </Button> */}
                <Button className={"bg-gray-600 px-2 py-0 hover:bg-gray-500 cursor-pointer"}>
                    {theme === "light" ? <Moon onClick={() => setTheme("dark")} size={20} /> :
                        <Sun onClick={() => setTheme("light")} size={20} />}
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
