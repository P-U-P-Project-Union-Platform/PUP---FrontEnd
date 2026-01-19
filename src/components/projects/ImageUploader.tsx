import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { validateImageFile, compressImage } from '../../utils/imageUtils';
import {
  Container,
  Label,
  UploadArea,
  UploadIcon,
  UploadText,
  UploadHint,
  PreviewContainer,
  PreviewImage,
  RemoveButton,
  ErrorText,
  HiddenInput,
} from '../../styles/components/projects/imageUploaderStyles';

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
