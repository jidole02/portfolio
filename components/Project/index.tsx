import styled from "@emotion/styled";
import ProjectTemplete from "./ProjectTemplete";
import { ProjectArray } from "./projectArray";

const Project = () => {
  return (
    <Wrapper>
      {ProjectArray.map((project, index) => (
        <ProjectTemplete
          title={project.title}
          description={project.description}
          tag={project.tag}
          stack={project.stack}
          projectName={project.projectName}
        />
      ))}
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
`;
