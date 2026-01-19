import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormWrapper,
  Header,
  Title,
  Description,
  Form,
  Section,
  Label,
  Input,
  Textarea,
  AvatarSection,
  Avatar,
  AvatarInfo,
  AvatarButton,
  HelpText,
  ButtonGroup,
  CancelButton,
  SaveButton
} from '../styles/pages/profileEditStyles';

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '김개발',
    email: 'developer@example.com',
    bio: '풀스택 개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아합니다.\n함께 성장할 수 있는 프로젝트에 관심이 많습니다.',
    github: 'https://github.com/username',
    blog: 'https://blog.example.com',
    portfolio: 'https://portfolio.example.com'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 실제로는 API 호출
    console.log('프로필 업데이트:', formData);

    alert('프로필이 업데이트되었습니다!');
    navigate('/mypage');
  };

  const handleCancel = () => {
    if (window.confirm('수정을 취소하시겠습니까? 변경사항이 저장되지 않습니다.')) {
      navigate('/mypage');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Header>
          <Title>프로필 수정</Title>
          <Description>
            나의 프로필 정보를 수정할 수 있습니다
          </Description>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Section>
            <Label>프로필 사진</Label>
            <AvatarSection>
              <Avatar>김</Avatar>
              <AvatarInfo>
                <AvatarButton type="button">사진 변경</AvatarButton>
                <HelpText>JPG, PNG 형식 / 최대 2MB</HelpText>
              </AvatarInfo>
            </AvatarSection>
          </Section>

          <Section>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름을 입력하세요"
            />
          </Section>

          <Section>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled
            />
            <HelpText>이메일은 변경할 수 없습니다</HelpText>
          </Section>

          <Section>
            <Label htmlFor="bio">자기소개</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="자신에 대해 소개해주세요"
            />
          </Section>

          <Section>
            <Label htmlFor="github">GitHub</Label>
            <Input
              id="github"
              name="github"
              type="url"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/username"
            />
          </Section>

          <Section>
            <Label htmlFor="blog">블로그</Label>
            <Input
              id="blog"
              name="blog"
              type="url"
              value={formData.blog}
              onChange={handleChange}
              placeholder="https://blog.example.com"
            />
          </Section>

          <Section>
            <Label htmlFor="portfolio">포트폴리오</Label>
            <Input
              id="portfolio"
              name="portfolio"
              type="url"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://portfolio.example.com"
            />
          </Section>

          <ButtonGroup>
            <CancelButton type="button" onClick={handleCancel}>
              취소
            </CancelButton>
            <SaveButton type="submit">
              저장하기
            </SaveButton>
          </ButtonGroup>
        </Form>
      </FormWrapper>
    </Container>
  );
}
