import { graphql } from "gatsby"
import { string } from "prop-types"

export const EducationHistoryType = {
  school: string.isRequired,
  period: string,
  level: string,
  url: string,
}

export const query = graphql`
  fragment EducationHistoryFragment on EducationHistoryYaml {
    school
    period
    level
    url
  }
`
