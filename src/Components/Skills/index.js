import React from "react";
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage } from "./SkillsStyledComponent";
import { skills } from "../../Data/constants";

const Skills = () => {
    return (
      <Container id="skills">
        <Wrapper>
          <Title>Tecnologías</Title>
          <Desc>Lenguajes, tecnologías y herramientas que he utilizado en mis proyectos.
          </Desc>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem>
                      <SkillImage src={item.image}/>
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
  
          </SkillsContainer>
        </Wrapper>
      </Container>
    )
  }
export default Skills;