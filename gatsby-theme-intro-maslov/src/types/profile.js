import { graphql } from "gatsby"
import { arrayOf, bool, number, shape, string, object } from "prop-types"

export const ProfileType = {
  about: string.isRequired,
  budget: shape({
    currency: string.isRequired,
    default: number.isRequired,
    max: number.isRequired,
    min: number.isRequired,
  }).isRequired,
  company: string.isRequired,
  company_url: string.isRequired,
  email: string.isRequired,
  focus: string.isRequired,
  focus_url: string,
  for_hire: bool.isRequired,
  image: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
  logotype: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
  initials: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  profession1: string.isRequired,
  profession2: string.isRequired,
  prof_link_1: string.isRequired,
  prof_link_2: string.isRequired,
  relocation: bool.isRequired,
  skills: arrayOf(string).isRequired,
  skills_links: arrayOf(string).isRequired,
  tools: arrayOf(string).isRequired,
  tools_links: arrayOf(string).isRequired,
  last_update: string.isRequired,
  cv_url: string.isRequired,
}

export const query = graphql`
  fragment ProfileFragment on ProfileYaml {
    about
    budget {
      currency
      default
      max
      min
    }
    company
    company_url
    email
    focus
    focus_url
    for_hire
    image {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 144, height: 144, quality: 85)
      }
      publicURL
    }
    logotype {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 72, height: 72, quality: 85)
      }
      publicURL
    }
    initials
    location
    name
    profession1
    profession2
    prof_link_1
    prof_link_2
    relocation
    skills
    skills_links
    tools
    tools_links
    last_update
    cv_url
  }
`
