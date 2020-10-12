import React from "react"
import About from "../about/about"
import ContactForm from "../contact-form/contact-form"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import Summary from "../summary/summary"
import Tools from "../tools/tools"
import WorkHistory from "../work-history/work-history"
import EducationHistory from "../work-history/education-history"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MainContent = ({ eduHistory, workHistory, projects, profile }) => {
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
      <Tabs>
        <TabList>
          <Tab selectedClassName="font-semibold bg-white">
            <span className="text-sm uppercase mt-12 mb-3 text-center">
              Work History
            </span>
          </Tab>
          <Tab selectedClassName="font-semibold bg-white">
            <span className="text-sm uppercase mt-12 mb-3 text-center">
              Education History
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <WorkHistory history={workHistory} />
        </TabPanel>
        <TabPanel>
          <EducationHistory history={eduHistory} />
        </TabPanel>
      </Tabs>
      <ContactForm email={profile.email} budget={profile.budget} />
    </main>
  )
}

export default MainContent
