import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <h5 className="font-header font-semibold text-front dark:text-gray-100 text-sm uppercase mb-3">
      About
    </h5>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line dark:text-gray-300">
      {about}
    </div>
  </>
)



About.propTypes = {
  about: ProfileType.about,
}

export default About
