import React from "react"
import About from "../about/about"
import ContactForm from "../contact-form/contact-form"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import Summary from "../summary/summary"
import Tools from "../tools/tools"
import WorkHistory from "../work-history/work-history"
import EducationHistory from "../work-history/education-history"
import Certifications from "../certifications/certifications"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MainContent = ({ eduHistory, workHistory, projects, profile, certifications }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && profile.skills_links &&
            <Skills skills={profile.skills} skillsLinks={profile.skills_links} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.tools && profile.tools_links &&
            <Tools tools={profile.tools} toolsLinks={profile.tools_links} />}
        </div>
      </div>

      {profile.about && <About about={profile.about} />}
      <Projects projects={projects} />
      <Tabs className="m-0">
        <TabList className="border-b-4 border-line">
          <Tab
          selectedClassName="font-semibold bg-white text-front"
          key={"history-tab-" + Math.random()}
          className="hover:bg-white transition-colors duration-100 inline-block px-3 py-2 cursor-pointer"
          >
            <span className="text-sm uppercase mt-12 mb-3 text-center">
              Workplaces
            </span>
          </Tab>
          <Tab
          selectedClassName="font-semibold bg-white"
          key={"history-tab-" + Math.random()}
          className="hover:bg-white transition-colors duration-100 inline-block px-3 py-2 cursor-pointer"
          >
            <span className="text-sm uppercase mt-12 mb-3 text-center">
              Education
            </span>
          </Tab>
          <Tab
          selectedClassName="font-semibold bg-white"
          key={"history-tab-" + Math.random()}
          className="hover:bg-white transition-colors duration-100 inline-block px-3 py-2 cursor-pointer"
          >
            <span className="text-sm uppercase mt-12 mb-3 text-center">
              Certifications
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <WorkHistory history={workHistory} />
        </TabPanel>
        <TabPanel>
          <EducationHistory history={eduHistory} />
        </TabPanel>
        <TabPanel>
          <Certifications certifications={certifications} />
        </TabPanel>
      </Tabs>
      <ContactForm email={profile.email} budget={profile.budget} />
    </main>
  )
}

export default MainContent
