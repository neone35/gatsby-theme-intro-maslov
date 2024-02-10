import React from "react"
import { number, string } from "prop-types"
import SkillSvg from "./skill.svg"
import styled, { keyframes } from "styled-components"

// This was placed inside <li> along with SkillSvg
// <span className="absolute font-header font-semibold text-front text-sm md:text-base px-2 text-center">
//   {skill}
// </span>

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  animation: ${rotate} 40s linear infinite;
`

const CenteredSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Skill = ({ skill, i }) => {
  let colorClass

  if (i === 1) {
    colorClass = "lead"
  } else {
    colorClass = "black" // You can provide a default color class if needed
  }

  return (
    <div className="relative transition transform hover:-translate-y-1 hover:scale-105 duration-150 ease-in-out">
      <Rotate>
        <li
          className={`relative flex justify-center items-center rounded-full`}
        >
          <SkillSvg className={`w-full text-${colorClass} opacity-75 m-2`} />
        </li>
      </Rotate>
      <CenteredSpan className={`text-center font-header font-bold text-${colorClass} text-md md:text-xl`}>
        {skill}
      </CenteredSpan>
    </div>
  )
}

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
