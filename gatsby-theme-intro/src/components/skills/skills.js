import React from "react"
import Skill from "./skill"
import { ProfileType } from "../../types"

const Skills = ({ skills, skillsLinks }) => (
  <span>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Top skills
    </h5>
    <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
      {skills.map((skill, i) => (
        <a 
          target="_blank"
          rel="noopener noreferrer"
          href={skillsLinks[i]}
          key={skill}
        >
          <Skill skill={skill} key={skill} i={i + 1} />
        </a>
      ))}
    </ul>
  </span>
)

Skills.propTypes = {
  skills: ProfileType.skills,
  skillsLinks: ProfileType.skills_links,
}

export default Skills
