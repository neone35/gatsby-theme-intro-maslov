import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ProfileType } from "../../types"

const ProfileImage = ({ image, name }) => (
  <div className="relative inline-block leading-none">
    <GatsbyImage
      image={image.childImageSharp.gatsbyImageData}
      alt={name}
      className="rounded-full relative z-40"
    />
    <div className="absolute inset-0 rounded-full bg-lead z-30 transform translate-x-12"></div>
    <div className="absolute inset-0 rounded-full bg-line z-20 transform translate-x-24"></div>
    <div className="absolute inset-0 rounded-full bg-white z-10 transform translate-x-36"></div>
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
}

export default ProfileImage
