/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import projects from "./projects";
import { ProjectsContainer, ProjectsContent } from "./styles";
import { Container, Title } from "../../styles/styles";
import { AllProjects } from "./Github";
import { Briefcase } from "phosphor-react";

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projects
        <span>
          <Briefcase /> Projects
        </span>
      </Title>
      <ProjectsContainer>
        {projects.map((project) => {
          return (
            <ProjectsContent>
              <img src={project.img} alt={project.title} />
              <div className="title">
                <h2>{project.title}</h2>
                <span>{project.type}</span>
              </div>
            </ProjectsContent>
          );
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  );
}
