import React from "react"
import { ProfileType } from "../../types"

const Tools = ({ tools, toolsLinks }) => (
  <span>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Main tools
    </h5>
    <ul className="flex-col mt-2">
      {tools.map((tool, i) => (
        <li className="inline-block md:block mb-1 mr-1 md:mr-0 hover:opacity-75 transition-opacity duration-150" key={tool}>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text"
            href={toolsLinks[i]}
          >
            {tool}
          </a>
        </li>
      ))}
    </ul>
  </span>
)

Tools.propTypes = {
  tools: ProfileType.tools,
  toolsLinks: ProfileType.tools_links,
}

export default Tools
