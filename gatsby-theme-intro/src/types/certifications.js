import { graphql } from "gatsby"
import { shape, string, object } from "prop-types"

export const CertificationType = {
  issuer: string.isRequired,
  program: string.isRequired,
  date: string,
  image: shape({
    childImageSharp: object.isRequired,
  }),
  url: string,
}

export const query = graphql`
  fragment CertificationFragment on CertificationsYaml {
    issuer
    program
    date
    image {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    url
  }
`
