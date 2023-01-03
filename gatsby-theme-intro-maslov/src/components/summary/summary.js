import React from "react"
import { FaCompass } from "react-icons/fa"
import { shape, ProfileType } from "../../types"

const Summary = ({ profile }) => (
  <div className="flex pb-8">
    <div className="w-1/2 pr-4 lg:pr-12 border-r border-line">
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        Company
      </h5>
      <h3 className="font-header font-light text-2xl text-front leading-tight">
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-front hover:opacity-75 h-4 w-4 transition-opacity duration-150"
            href={profile.company_url}
          >
            {profile.company}
          </a>
        </div>
      </h3>
      {profile.for_hire && (
        <div className="font-header font-semibold text-xs uppercase pt-2">
          <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
          Available for hire
        </div>
      )}
    </div>
    <div className="w-1/2 pl-4 lg:pl-12">
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        Focused on
      </h5>
      <div className="font-header font-light text-2xl text-front leading-tight">
        <div>
          <a
            aria-label="website"
            className="text-front hover:opacity-75 h-4 w-4 transition-opacity duration-150"
            href={profile.focus_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {profile.focus}
          </a>
        </div>
      </div>
    </div>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary
