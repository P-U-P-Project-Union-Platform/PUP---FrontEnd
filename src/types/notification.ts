export type NotificationType =
  | 'project_application' // 프로젝트 지원
  | 'comment' // 댓글
  | 'like' // 좋아요
  | 'mention'; // 멘션

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  link?: string; // 클릭 시 이동할 경로
  relatedUserId?: string; // 관련 사용자 ID
  relatedUserName?: string; // 관련 사용자 이름
  relatedItemId?: string; // 관련 프로젝트/게시글 ID
}
