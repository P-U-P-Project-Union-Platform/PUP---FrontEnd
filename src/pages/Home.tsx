import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111827;
`;

const Section = styled.section`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
`;

export default function Home() {
  return (
    <Container>
      <Title>홈페이지</Title>

      <Section>
        <SectionTitle>소개</SectionTitle>
        <Paragraph>
          설명
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>주요 기능</SectionTitle>
        <Paragraph>이거</Paragraph>
        <Paragraph>이거</Paragraph>
        <Paragraph>이거</Paragraph>
      </Section>
    </Container>
  );
}
