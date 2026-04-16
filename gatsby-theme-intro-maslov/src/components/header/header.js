import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { ProfileType, shape } from "../../types"
import Logotype from "./logotype"
import ThemeToggle from "../ThemeToggle"

const Header = ({ profile }) => (
  <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm lg:bg-background lg:backdrop-blur-none flex justify-between p-4 lg:px-8">
    <div className="flex items-center gap-4">
      <Logotype initials={profile.initials} logotype={profile.logotype} />
      <ThemeToggle />
    </div>
    <a
      className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      href={profile.for_hire_url}
    >
      <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
      <span className="hidden lg:block">Hire me</span>
    </a>
  </header>
)

Header.propTypes = {
  profile: shape(ProfileType),
}

export default Header
