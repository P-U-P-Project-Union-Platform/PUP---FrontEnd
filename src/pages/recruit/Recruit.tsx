import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import { projectService } from '../../services/projectService';
import { PROJECT_CATEGORIES } from '../../types/project';
import ImageUploader from '../../components/projects/ImageUploader';
import TagInput from '../../components/projects/TagInput';
import CategorySelector from '../../components/projects/CategorySelector';
import {
  Container,
  FormWrapper,
  Header,
  Title,
  Description,
  Form,
  Section,
  Label,
  Required,
  Input,
  Textarea,
  PositionList,
  PositionItem,
  PositionInput,
  CountInput,
  RemoveButton,
  AddButton,
  ButtonGroup,
  CancelButton,
  SubmitButton,
  ErrorMessage,
  HelpText
} from '../../styles/pages/recruitWriteStyles';

interface Position {
  name: string;
  count: string;
}

export default function Recruit() {
  const navigate = useNavigate();
  const { userProfile } = useApp();
  const [thumbnail, setThumbnail] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [positions, setPositions] = useState<Position[]>([
    { name: '', count: '' }
  ]);
  const [tags, setTags] = useState<string[]>([]);
  const [techStack, setTechStack] = useState<string[]>([]);
  const [github, setGithub] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleAddPosition = () => {
    setPositions([...positions, { name: '', count: '' }]);
  };

  const handleRemovePosition = (index: number) => {
    if (positions.length > 1) {
      setPositions(positions.filter((_, i) => i !== index));
    }
  };

  const handlePositionChange = (index: number, field: 'name' | 'count', value: string) => {
    const newPositions = [...positions];
    newPositions[index][field] = value;
    setPositions(newPositions);
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!category) {
      newErrors.category = '카테고리를 선택해주세요.';
    }

    if (!projectTitle.trim()) {
      newErrors.projectTitle = '프로젝트 제목을 입력해주세요.';
    }

    if (!description.trim()) {
      newErrors.description = '프로젝트 설명을 입력해주세요.';
    }

    const validPositions = positions.filter(p => p.name.trim() && p.count.trim());
    if (validPositions.length === 0) {
      newErrors.positions = '최소 1개 이상의 포지션을 입력해주세요.';
    }

    if (techStack.length === 0) {
      newErrors.techStack = '최소 1개 이상의 기술 스택을 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // 프로젝트 데이터 생성
    const projectData = {
      title: projectTitle,
      description,
      thumbnail: thumbnail || null,
      category: category as any,
      tags,
      techStack,
      github,
      author: {
        id: userProfile?.username || '1',
        name: userProfile?.name || '익명'
      },
      status: 'recruiting' as const,
      positions: positions.filter(p => p.name.trim() && p.count.trim())
    };

    // 프로젝트 서비스에 추가
    projectService.create(projectData);

    // 프로젝트 목록 페이지로 이동
    alert('인원 모집 프로젝트가 등록되었습니다!');
    navigate('/projects');
  };

  const handleCancel = () => {
    if (window.confirm('작성을 취소하시겠습니까? 입력한 내용이 모두 사라집니다.')) {
      navigate('/projects');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <Title>팀원 모집 공고 작성</Title>
          <Description>
            함께 프로젝트를 만들어갈 팀원을 모집하세요
          </Description>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Section>
            <Label>
              프로젝트 썸네일
            </Label>
            <ImageUploader
              value={thumbnail}
              onChange={setThumbnail}
            />
            <HelpText>프로젝트를 대표하는 이미지를 업로드해주세요 (JPG, PNG, WEBP, GIF / 최대 5MB)</HelpText>
          </Section>

          <Section>
            <Label>
              카테고리<Required>*</Required>
            </Label>
            <CategorySelector
              value={category}
              onChange={setCategory}
            />
            {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
          </Section>

          <Section>
            <Label htmlFor="projectTitle">
              프로젝트 제목<Required>*</Required>
            </Label>
            <Input
              id="projectTitle"
              type="text"
              placeholder="예: AI 기반 학습 플랫폼 개발"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
            {errors.projectTitle && <ErrorMessage>{errors.projectTitle}</ErrorMessage>}
          </Section>

          <Section>
            <Label htmlFor="description">
              프로젝트 설명<Required>*</Required>
            </Label>
            <Textarea
              id="description"
              placeholder="프로젝트에 대한 자세한 설명을 작성해주세요&#10;- 프로젝트의 목적과 목표&#10;- 예상 진행 기간&#10;- 기대하는 역량&#10;- 기타 참고사항"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </Section>

          <Section>
            <Label>
              모집 포지션<Required>*</Required>
            </Label>
            <PositionList>
              {positions.map((position, index) => (
                <PositionItem key={index}>
                  <PositionInput
                    type="text"
                    placeholder="포지션 (예: 프론트엔드 개발자)"
                    value={position.name}
                    onChange={(e) => handlePositionChange(index, 'name', e.target.value)}
                  />
                  <CountInput
                    type="number"
                    min="1"
                    placeholder="인원 수"
                    value={position.count}
                    onChange={(e) => handlePositionChange(index, 'count', e.target.value)}
                  />
                  {positions.length > 1 && (
                    <RemoveButton
                      type="button"
                      onClick={() => handleRemovePosition(index)}
                    >
                      삭제
                    </RemoveButton>
                  )}
                </PositionItem>
              ))}
            </PositionList>
            <AddButton
              type="button"
              onClick={handleAddPosition}
              style={{ marginTop: '12px' }}
            >
              + 포지션 추가
            </AddButton>
            {errors.positions && <ErrorMessage>{errors.positions}</ErrorMessage>}
          </Section>

          <Section>
            <Label>
              해시태그
            </Label>
            <TagInput
              tags={tags}
              onChange={setTags}
              placeholder="해시태그를 입력하고 Enter를 눌러주세요"
            />
            <HelpText>프로젝트 관련 해시태그를 입력해주세요 (예: #초보환영 #팀프로젝트)</HelpText>
          </Section>

          <Section>
            <Label>
              기술 스택<Required>*</Required>
            </Label>
            <TagInput
              tags={techStack}
              onChange={setTechStack}
              placeholder="기술 스택을 입력하고 Enter를 눌러주세요"
            />
            {errors.techStack && <ErrorMessage>{errors.techStack}</ErrorMessage>}
            <HelpText>프로젝트에 사용되는 기술 스택을 입력해주세요 (예: React, TypeScript)</HelpText>
          </Section>

          <Section>
            <Label htmlFor="github">
              GitHub 저장소 URL
            </Label>
            <Input
              id="github"
              type="url"
              placeholder="https://github.com/username/project"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
            <HelpText>GitHub 저장소 URL이 있다면 입력해주세요</HelpText>
          </Section>

          <ButtonGroup>
            <CancelButton type="button" onClick={handleCancel}>
              취소
            </CancelButton>
            <SubmitButton type="submit">
              등록하기
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </FormWrapper>
    </Container>
  );
}
