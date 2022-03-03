import styled from "@emotion/styled";
import ProjectTemplete from "./ProjectTemplete";
import { ProjectArray } from "./projectArray";

const Project = () => {
  return (
    <Wrapper>
      {ProjectArray.map((project, index) => (
        <ProjectTemplete
          key={index}
          title={project.title}
          description={project.description}
          tag={project.tag}
          stack={project.stack}
          projectName={project.projectName}
          index={index + 1}
        />
      ))}
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-bottom: 100px;
`;
