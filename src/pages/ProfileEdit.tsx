import {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useApp} from '../contexts/AppContext';
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
    const {userProfile, updateProfile} = useApp();
    const [formData, setFormData] = useState(userProfile);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFormData(userProfile);
        setAvatarPreview(userProfile.avatar || null);
    }, [userProfile]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 파일 크기 검증 (2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('파일 크기는 2MB 이하여야 합니다.');
            return;
        }

        // 파일 타입 검증
        if (!file.type.startsWith('image/')) {
            alert('이미지 파일만 업로드할 수 있습니다.');
            return;
        }

        // 파일 미리보기
        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setAvatarPreview(result);
            setFormData(prev => ({
                ...prev,
                avatar: result
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Context 업데이트
        updateProfile(formData);

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
                            <Avatar style={avatarPreview ? {
                                background: `url(${avatarPreview}) center/cover`,
                                fontSize: 0
                            } : {}}>
                                {!avatarPreview && formData.initial}
                            </Avatar>
                            <AvatarInfo>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{display: 'none'}}
                                />
                                <AvatarButton type="button" onClick={handleAvatarClick}>
                                    사진 변경
                                </AvatarButton>
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
                            value={formData.email || ''}
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
                            value={formData.github || ''}
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
                            value={formData.blog || ''}
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
                            value={formData.portfolio || ''}
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
