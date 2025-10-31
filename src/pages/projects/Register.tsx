import { useState, useRef } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const Container = styled.div`
  background-color: #F9F9F9;
  min-height: 100vh;
  padding: 60px 40px;
  color: #333;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  color: #1a1a1a;
  font-size: 18px;
  padding: 12px 0;
  font-family: inherit;
  outline: none;
  
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

const TitleInput = styled(Input)`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  background: transparent;
  border: none;
  color: #1a1a1a;
  font-size: 16px;
  padding: 12px 0;
  font-family: inherit;
  outline: none;
  resize: none;
  line-height: 1.8;
  
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TechInputContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

const TechInput = styled(Input)`
  flex: 1;
  border-bottom: 1px solid #ddd;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const TechTag = styled.span`
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f5f5f5;
    border-color: #bbb;
  }
`;

const SubmitButton = styled.button`
  background: #4f46e5;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
  transition: background 0.2s;
  
  &:hover {
    background: #4338ca;
  }
`;

export default function Register() {
  const [title, setTitle] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [newTech, setNewTech] = useState("");
  const [github, setGithub] = useState("");
  const [description, setDescription] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const addTech = () => {
    if (newTech.trim() && !techStack.includes(newTech.trim())) {
      setTechStack([...techStack, newTech.trim()]);
      setNewTech("");
    }
  };

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter((t) => t !== tech));
  };

  const handleSubmit = () => {
    const projectData = {
      title,
      techStack,
      github,
      description,
    };
    console.log("📦 프로젝트 데이터:", projectData);
    alert("프로젝트가 등록되었습니다!");
  };

  return (
    <Container>
      <FormContainer>
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="프로젝트 제목..."
          />
          <Label>기술 스택</Label>
          <TechInputContainer>
            <TechInput
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="기술 입력 후 Enter"
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), addTech())
              }
            />
          </TechInputContainer>

          <TechList>
            {techStack.map((tech) => (
              <TechTag key={tech} onClick={() => removeTech(tech)}>
                {tech} ✕
              </TechTag>
            ))}
          </TechList>

          <Label>GitHub 링크</Label>
          <Input
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/..."
          />

          <Label>프로젝트 설명</Label>
          <Textarea
            ref={textareaRef}
            minRows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="해당 프로젝트의 대해서 설명해주세요"
          />

        <SubmitButton onClick={handleSubmit}>프로젝트 등록</SubmitButton>
      </FormContainer>
    </Container>
  );
}