import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  background: #1a1a1a;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 140px;
  }
  
  @media (max-width: 480px) {
    height: 120px;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

interface ProjectProps {
  title: string;
  description: string;
  imageUrl?: string; 
}

export default function Project({ title, description, imageUrl }: ProjectProps) {
  return (
    <Card>
      {imageUrl && <Image src={imageUrl} alt={title} />}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};