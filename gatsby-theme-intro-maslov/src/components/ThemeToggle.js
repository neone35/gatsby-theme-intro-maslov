import React from "react"
import { useTheme } from "../context/ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-line dark:bg-gray-700 text-front dark:text-white transition-colors duration-200"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggle
