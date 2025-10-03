import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full text-center py-4 mt-6 shadow-2xl">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} — Build by Adnan Kovacevic
            </p>
        </footer>
    )
}

export default Footer
