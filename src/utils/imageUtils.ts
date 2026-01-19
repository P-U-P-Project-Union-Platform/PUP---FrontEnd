/**
 * 이미지 파일 유효성 검사
 */
export function validateImageFile(
  file: File,
  maxSizeMB: number = 5
): { valid: boolean; error?: string } {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  if (!validTypes.includes(file.type)) {
    return {
      valid: false,
      error: 'JPG, PNG, WEBP, GIF 형식만 지원됩니다.',
    };
  }

  const maxBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxBytes) {
    return {
      valid: false,
      error: `파일 크기는 ${maxSizeMB}MB 이하여야 합니다.`,
    };
  }

  return { valid: true };
}

/**
 * 이미지 압축 및 리사이징 (Canvas API 사용)
 * @param file 원본 이미지 파일
 * @param maxWidth 최대 너비 (기본 1200px)
 * @param maxHeight 최대 높이 (기본 675px)
 * @param quality 압축 품질 (0~1, 기본 0.85)
 * @returns Base64 인코딩된 이미지 문자열
 */
export function compressImage(
  file: File,
  maxWidth: number = 1200,
  maxHeight: number = 675,
  quality: number = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        // 비율 유지하며 리사이징
        if (width > maxWidth || height > maxHeight) {
          const aspectRatio = width / height;

          if (width > height) {
            width = maxWidth;
            height = width / aspectRatio;
          } else {
            height = maxHeight;
            width = height * aspectRatio;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas 컨텍스트를 가져올 수 없습니다.'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // WebP 형식으로 변환 (더 작은 파일 크기)
        const base64 = canvas.toDataURL('image/webp', quality);
        resolve(base64);
      };

      img.onerror = () => reject(new Error('이미지 로드 실패'));
      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error('파일 읽기 실패'));
    reader.readAsDataURL(file);
  });
}
