import React from "react"
import { FaCompass, FaReact, FaWordpressSimple } from "react-icons/fa"
import { AiFillAndroid, AiFillGithub } from "react-icons/ai"
import { ProjectType } from "../../types"
import PropTypes from 'prop-types';

const ProjectIcon = ({ icon, classNames }) => (
  <span className={classNames}>
    {
      {
        'github': <AiFillGithub className="w-6 h-6 inline-block" />,
        'website': <FaCompass className="w-6 h-6 inline-block" />,
        'android': <AiFillAndroid className="w-6 h-6 inline-block" />,
        'react': <FaReact className="w-6 h-6 inline-block" />,
        'wordpress': <FaWordpressSimple className="w-6 h-6 inline-block" />
      }[icon]
    }
  </span>
)

ProjectIcon.propTypes = {
  icon: ProjectType.icon,
  classNames: PropTypes.string,
}

export default ProjectIcon
