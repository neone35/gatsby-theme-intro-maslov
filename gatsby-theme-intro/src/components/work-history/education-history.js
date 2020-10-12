import React from "react"
import { arrayOf, shape, EducationHistoryType } from "../../types"
import "./work-history.css"

// Removed title
// <h5 className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3 text-center">
//   Education history
// </h5>

const EducationHistory = ({ history }) => {
  return (
      <div className="history flex flex-col relative pt-6 pb-6">
        {history.map(({ school, period, level, url }, i) => (
          <div
            className="history-entry relative w-1/2 py-4"
            key={`${school}_${i}`}
          >
            <span className="dot-bg w-14 h-14 absolute bg-line inline-flex rounded-full items-center justify-center hover:opacity-75 transition-opacity duration-150">
              <span className="dot w-5 h-5 bg-back-light rounded-full" />
            </span>
            {url ? (
              <h4 className="subpixel-antialiased">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-150"
                >
                  {school}
                </a>
              </h4>
            ) : (
              <h4 className="subpixel-antialiased">{school}</h4>
            )}

            {level && (
              <h5 className="text-sm font-normal mb-1">{level}</h5>
            )}
            {period && (
              <span className="text-sm font-medium opacity-50">{period}</span>
            )}
          </div>
        ))}
      </div>
  )
}

EducationHistory.propTypes = {
  history: arrayOf(shape(EducationHistoryType)),
}

export default EducationHistory
