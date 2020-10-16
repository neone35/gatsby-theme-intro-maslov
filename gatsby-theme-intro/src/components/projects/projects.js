import React from "react"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import ProjectIcon from "./project-icon"

var distinctIcons = [];

function getDistinctIcons(projects) {
  var allIcons = [];
  for (let i = 0; i < projects.length; i++) {
    allIcons.push(projects[i].icon);
  }
  distinctIcons = [...new Set(allIcons)];
  return distinctIcons;
}

function getOneTypeProjectList(projects, distinctIcon) {
  var projectList = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].icon === distinctIcon) {
      projectList.push(projects[i]);
    }
  }
  return projectList;
}

function createProjectsPanel(icon, projects) {
  var tabProjects = getOneTypeProjectList(projects, icon);
  return (
    <TabPanel key={icon}>
      {tabProjects.map((project, i) => (
        <Project key={`${project.name}_${i}`} {...project} />
      ))}
    </TabPanel>
  )
}

const Projects = ({ projects }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Projects
    </h5>
    <Tabs className="m-0">
      <TabList className="border-b-0 border-line">
        {getDistinctIcons(projects).map((icon, i) => (
          <Tab 
          selectedClassName="font-semibold bg-white text-front" 
          key={`${icon}_${i}`} 
          className="hover:bg-white transition-colors duration-100 inline-block px-3 py-2 cursor-pointer"
          >
            <ProjectIcon icon={icon} className="bg-black align-middle inline-block" />
            <span className="text-sm uppercase mt-12 mb-3 align-middle ml-1">
              {icon}
            </span>
          </Tab>
        ))}
      </TabList>
      {distinctIcons.map((icon, i) => (
        createProjectsPanel(icon, projects)
      ))}
    </Tabs>
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
