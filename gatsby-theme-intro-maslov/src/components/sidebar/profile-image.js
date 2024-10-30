import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { ProfileType } from "../../types"
import styled from "styled-components"

const CenteredSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ProfileImage = ({ image, name, cv_url }) => (
  <div className="relative inline-block leading-none">
    <GatsbyImage
      image={image.childImageSharp.gatsbyImageData}
      alt={name}
      className="rounded-full relative z-40"
    />
    {/* <div className="absolute inset-0 rounded-full bg-lead z-30 transform translate-x-12"></div>
    <div className="absolute inset-0 rounded-full bg-line z-20 transform translate-x-24"></div> */}
    <a target="_blank" rel="noopener noreferrer" href={cv_url}>
      <div className="absolute inset-0 rounded-full bg-lead z-10 transform transition translate-x-24 hover:bg-blue-500 duration-150 ease-in-out">
        <CenteredSpan
          className={`text-center font-header text-white text-md md:text-2xl`}
        >
          CV
        </CenteredSpan>
      </div>
    </a>
  </div>
)

ProfileImage.propTypes = {
  image: ProfileType.image,
  name: ProfileType.name,
  cv_url: ProfileType.cv_url,
}

export default ProfileImage
