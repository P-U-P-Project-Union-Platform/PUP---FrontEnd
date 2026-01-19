import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
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
  CategorySelect,
  Input,
  Textarea,
  HelpText,
  ButtonGroup,
  CancelButton,
  SubmitButton,
  ErrorMessage
} from '../styles/pages/communityWriteStyles';

const categories = ['자유', '질문', '정보', '후기'];

export default function CommunityWrite() {
  const navigate = useNavigate();
  const { addCommunityPost } = useApp();
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    content: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.category) {
      newErrors.category = '카테고리를 선택해주세요.';
    }

    if (!formData.title.trim()) {
      newErrors.title = '제목을 입력해주세요.';
    } else if (formData.title.length < 5) {
      newErrors.title = '제목은 최소 5자 이상 입력해주세요.';
    }

    if (!formData.content.trim()) {
      newErrors.content = '내용을 입력해주세요.';
    } else if (formData.content.length < 10) {
      newErrors.content = '내용은 최소 10자 이상 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // 게시글 데이터 생성
    const postData = {
      ...formData,
      author: '김개발', // 실제로는 로그인한 사용자 정보
      authorInitial: '김',
      date: new Date().toISOString().split('T')[0]
    };

    // Context에 추가
    addCommunityPost(postData);

    alert('게시글이 작성되었습니다!');
    navigate('/community');
  };

  const handleCancel = () => {
    if (window.confirm('작성을 취소하시겠습니까? 입력한 내용이 모두 사라집니다.')) {
      navigate('/community');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <Title>게시글 작성</Title>
          <Description>
            프로젝트와 개발에 대한 이야기를 자유롭게 공유해보세요
          </Description>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Section>
            <Label htmlFor="category">
              카테고리<Required>*</Required>
            </Label>
            <CategorySelect
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">카테고리를 선택하세요</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </CategorySelect>
            {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
          </Section>

          <Section>
            <Label htmlFor="title">
              제목<Required>*</Required>
            </Label>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="제목을 입력하세요"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
          </Section>

          <Section>
            <Label htmlFor="content">
              내용<Required>*</Required>
            </Label>
            <Textarea
              id="content"
              name="content"
              placeholder="내용을 입력하세요&#10;&#10;마크다운 문법을 사용할 수 있습니다.&#10;&#10;예시:&#10;# 제목&#10;## 소제목&#10;- 리스트&#10;**굵게**&#10;*기울임*"
              value={formData.content}
              onChange={handleChange}
            />
            {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
            <HelpText>
              최소 10자 이상 작성해주세요. 마크다운 문법이 지원됩니다.
            </HelpText>
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
