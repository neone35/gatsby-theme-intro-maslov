import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const ProjectType = {
  description: string,
  icon: oneOf(["github", "website", "android", "react", "wordpress", "python"]),
  image: shape({
    childImageSharp: object.isRequired,
  }),
  name: string.isRequired,
  status: string,
  tags: arrayOf(string),
  url: string,
  year: string
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    description
    icon
    image {
      childImageSharp {
        gatsbyImageData(width: 640, quality: 85)
      }
    }
    name
    status
    tags
    url
    year
  }
`
