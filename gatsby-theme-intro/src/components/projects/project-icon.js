import React from "react"
import { FaCompass, FaReact, FaWordpressSimple } from "react-icons/fa"
import { AiFillAndroid, AiFillGithub } from "react-icons/ai"
import { ProjectType } from "../../types"

const ProjectIcon = ({ icon }) => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back">
    {
      {
        'github': <AiFillGithub className="w-6 h-6" />,
        'website': <FaCompass className="w-6 h-6" />,
        'android': <AiFillAndroid className="w-6 h-6" />,
        'react': <FaReact className="w-6 h-6" />,
        'wordpress': <FaWordpressSimple className="w-6 h-6" />
      }[icon]
    }
  </span>
)

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
}

export default ProjectIcon
