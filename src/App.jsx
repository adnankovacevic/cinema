import { useTheme } from "./context/theme/useTheme"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = ({ children }) => {
  const [theme] = useTheme();

  return (
    <div className={theme === "dark" ? "dark bg-gray-900 text-white min-h-screen flex flex-col" : "bg-white text-black min-h-screen flex flex-col"}>
      <Navbar />
      <main className="flex-1 p-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App
