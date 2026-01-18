import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import ImageUploader from "../../components/projects/ImageUploader";
import CategorySelector from "../../components/projects/CategorySelector";
import TagInput from "../../components/projects/TagInput";
import { projectService } from "../../services/projectService";
import { POPULAR_TAGS, type ProjectCategory } from "../../types/project";

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
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [category, setCategory] = useState<ProjectCategory | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [techStack, setTechStack] = useState<string[]>([]);
  const [github, setGithub] = useState("");
  const [description, setDescription] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    // 필수 필드 검증
    if (!title.trim()) {
      alert("프로젝트 제목을 입력해주세요.");
      return;
    }

    if (!category) {
      alert("카테고리를 선택해주세요.");
      return;
    }

    try {
      const newProject = projectService.create({
        title: title.trim(),
        description: description.trim(),
        thumbnail,
        category,
        tags,
        techStack,
        github: github.trim(),
      });

      alert("프로젝트가 등록되었습니다!");
      navigate("/projects");
    } catch (error) {
      alert((error as Error).message || "프로젝트 등록에 실패했습니다.");
    }
  };

  return (
    <Container>
      <FormContainer>
        <ImageUploader value={thumbnail} onChange={setThumbnail} />

        <TitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="프로젝트 제목..."
        />

        <CategorySelector value={category} onChange={setCategory} />

        <TagInput
          label="기술 스택"
          tags={techStack}
          onChange={setTechStack}
          placeholder="기술 입력 후 Enter (예: React, TypeScript)"
          prefix=""
        />

        <TagInput
          label="해시태그"
          tags={tags}
          onChange={setTags}
          placeholder="태그 입력 후 Enter"
          prefix="#"
          suggestions={POPULAR_TAGS}
          maxTags={10}
        />

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
          placeholder="해당 프로젝트에 대해서 설명해주세요"
        />

        <SubmitButton onClick={handleSubmit}>프로젝트 등록</SubmitButton>
      </FormContainer>
    </Container>
  );
}