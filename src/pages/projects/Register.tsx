import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 720px;
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  border-left: 4px solid #4f46e5;
  padding-left: 10px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #444;
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79,70,229,0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79,70,229,0.1);
  }
`;

const Select = styled.select`
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
`;

const TechInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const TechInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const AddButton = styled.button`
  padding: 10px 16px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #4338ca;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechTag = styled.span`
  background-color: #eef2ff;
  color: #4f46e5;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #e0e7ff;
  }
`;

const SubmitButton = styled.button`
  background-color: #4f46e5;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 14px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #4338ca;
  }
`;

export default function Register() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [newTech, setNewTech] = useState("");
  const [github, setGithub] = useState("");
  const [demo, setDemo] = useState("");
  const [description, setDescription] = useState("");

  const addTech = () => {
    if (newTech.trim() && !techStack.includes(newTech.trim())) {
      setTechStack([...techStack, newTech.trim()]);
      setNewTech("");
    }
  };

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter((t) => t !== tech));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      title,
      summary,
      category,
      techStack,
      github,
      demo,
      description,
    };
    console.log("📦 프로젝트 데이터:", projectData);
    alert("프로젝트가 등록되었습니다!");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>기본 정보</SectionTitle>
          <Label>프로젝트 제목</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            required
          />

          <Label>요약 설명</Label>
          <Textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="프로젝트에 대한 간단한 설명을 입력하세요"
          />

          <Label>카테고리</Label>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">선택하세요</option>
            <option value="AI">AI</option>
            <option value="Web">Web</option>
            <option value="App">App</option>
            <option value="IoT">IoT</option>
            <option value="Game">Game</option>
          </Select>
        </Section>

        <Section>
          <SectionTitle>기술 스택</SectionTitle>
          <TechInputContainer>
            <TechInput
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              placeholder="기술 입력 후 Enter"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
            />
            <AddButton type="button" onClick={addTech}>추가</AddButton>
          </TechInputContainer>

          <TechList>
            {techStack.map((tech) => (
              <TechTag key={tech} onClick={() => removeTech(tech)}>
                {tech} ✕
              </TechTag>
            ))}
          </TechList>
        </Section>

        <Section>
          <SectionTitle>링크</SectionTitle>
          <Label>GitHub 링크</Label>
          <Input
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/..."
          />

          <Label>배포 링크</Label>
          <Input
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
            placeholder="https://example.com"
          />
        </Section>

        <Section>
          <SectionTitle>상세 설명</SectionTitle>
          <Textarea
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="프로젝트의 동기, 과정, 결과 등을 자세히 입력하세요"
          />
        </Section>

        <SubmitButton type="submit">프로젝트 등록</SubmitButton>
      </Form>
    </Container>
  );
};
