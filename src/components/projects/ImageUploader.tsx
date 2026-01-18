import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import styled from 'styled-components';
import { validateImageFile, compressImage } from '../../utils/imageUtils';

const Container = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const UploadArea = styled.div<{ isDragging: boolean }>`
  border: 2px dashed ${(props) => (props.isDragging ? '#4f46e5' : '#ddd')};
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props) => (props.isDragging ? '#f0f0ff' : '#fff')};

  &:hover {
    border-color: #4f46e5;
    background: #f9f9ff;
  }
`;

const UploadIcon = styled.div`
  font-size: 48px;
  margin-bottom: 12px;
`;

const UploadText = styled.p`
  color: #666;
  font-size: 16px;
  margin: 8px 0;
`;

const UploadHint = styled.p`
  color: #999;
  font-size: 13px;
  margin: 4px 0;
`;

const PreviewContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const ErrorText = styled.p`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
`;

const HiddenInput = styled.input`
  display: none;
`;

interface ImageUploaderProps {
  value: string | null;
  onChange: (imageData: string | null) => void;
  maxSizeMB?: number;
}

export default function ImageUploader({
  value,
  onChange,
  maxSizeMB = 5,
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setError(null);
    setIsProcessing(true);

    // 유효성 검사
    const validation = validateImageFile(file, maxSizeMB);
    if (!validation.valid) {
      setError(validation.error!);
      setIsProcessing(false);
      return;
    }

    try {
      // 이미지 압축 및 Base64 변환
      const compressed = await compressImage(file, 1200, 675);
      onChange(compressed);
    } catch (err) {
      setError('이미지 처리에 실패했습니다. 다른 이미지를 선택해주세요.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleRemove = () => {
    onChange(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Container>
      <Label>썸네일 이미지</Label>

      {value ? (
        <PreviewContainer>
          <PreviewImage src={value} alt="썸네일 미리보기" />
          <RemoveButton onClick={handleRemove} type="button">
            ✕
          </RemoveButton>
        </PreviewContainer>
      ) : (
        <UploadArea
          isDragging={isDragging}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadIcon>📷</UploadIcon>
          <UploadText>
            {isProcessing
              ? '이미지 처리 중...'
              : '이미지를 드래그하거나 클릭하세요'}
          </UploadText>
          <UploadHint>(최대 {maxSizeMB}MB, JPG/PNG/WEBP/GIF)</UploadHint>
        </UploadArea>
      )}

      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleFileSelect}
      />

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
