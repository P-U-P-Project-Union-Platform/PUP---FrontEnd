import Project from "../project/Poject";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
  padding: 3rem 5rem;
  
  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1600px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const projects = [
  { id: 1, title: "프로젝트 A", description: "설명 텍스트입니다.", imageUrl: "https://picsum.photos/200?random=1" },
  { id: 2, title: "프로젝트 B", description: "이미지 없는 카드입니다." },
  { id: 3, title: "프로젝트 C", description: "또 다른 프로젝트", imageUrl: "https://picsum.photos/200?random=2" },
  { id: 4, title: "프로젝트 D", description: "설명 텍스트입니다." },
  { id: 5, title: "프로젝트 E", description: "이미지 있는 프로젝트", imageUrl: "https://picsum.photos/200?random=3" },
  { id: 6, title: "프로젝트 F", description: "이미지 없는 프로젝트" },
  { id: 7, title: "프로젝트 G", description: "설명 텍스트입니다.", imageUrl: "https://picsum.photos/200?random=4" },
  { id: 8, title: "프로젝트 H", description: "이미지 없는 카드입니다." },
  { id: 9, title: "프로젝트 I", description: "또 다른 프로젝트", imageUrl: "https://picsum.photos/200?random=5" },
  { id: 10, title: "프로젝트 J", description: "설명 텍스트입니다." },
  { id: 11, title: "프로젝트 K", description: "이미지 있는 프로젝트", imageUrl: "https://picsum.photos/200?random=6" },
  { id: 12, title: "프로젝트 L", description: "이미지 없는 프로젝트" },
  { id: 13, title: "프로젝트 M", description: "설명 텍스트입니다.", imageUrl: "https://picsum.photos/200?random=7" },
  { id: 14, title: "프로젝트 N", description: "이미지 없는 카드입니다." },
  { id: 15, title: "프로젝트 O", description: "또 다른 프로젝트", imageUrl: "https://picsum.photos/200?random=8" },
  { id: 16, title: "프로젝트 P", description: "설명 텍스트입니다." },
  { id: 17, title: "프로젝트 Q", description: "이미지 있는 프로젝트", imageUrl: "https://picsum.photos/200?random=9" },
  { id: 18, title: "프로젝트 R", description: "이미지 없는 프로젝트" },
  { id: 19, title: "프로젝트 S", description: "설명 텍스트입니다.", imageUrl: "https://picsum.photos/200?random=10" },
  { id: 20, title: "프로젝트 T", description: "이미지 없는 카드입니다." }
];

export default function ProjectsPage() {
  return (
    <Container>
      <Grid>
        {projects.map(proj => (
          <Project
            key={proj.id}
            title={proj.title}
            description={proj.description}
            imageUrl={proj.imageUrl}
          />
        ))}
      </Grid>
    </Container>
  );
};
