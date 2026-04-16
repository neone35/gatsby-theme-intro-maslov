import { graphql } from "gatsby"
import React from "react"
import { ThemeProvider } from "../context/ThemeContext"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import SEO from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const {
    eduHistory,
    workHistory,
    profile,
    projects,
    site,
    social,
    certifications,
  } = data

  return (
    <ThemeProvider>
      <div className="antialiased bg-back leading-normal font-text text-front dark:bg-gray-900 dark:text-gray-100">
        <SEO />
        <StructuredData profile={profile} social={social.nodes} />
        <CustomFonts />

      <Header profile={profile} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          eduHistory={eduHistory.nodes}
          workHistory={workHistory.nodes}
          profile={profile}
          projects={projects.nodes}
          certifications={certifications.nodes}
        />
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
        lastUpdate={profile.last_update}
      />
    </div>
  </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    workHistory: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    eduHistory: allEducationHistoryYaml {
      nodes {
        ...EducationHistoryFragment
      }
    }
    certifications: allCertificationsYaml {
      nodes {
        ...CertificationFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
  }
`
