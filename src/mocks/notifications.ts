import type { Notification } from '../types/notification';

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'project_application',
    title: '프로젝트 지원',
    message: '박프론트님이 "AI 학습 플랫폼" 프로젝트의 프론트엔드 개발자 포지션에 지원했습니다.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30분 전
    isRead: false,
    link: '/projects/1',
    relatedUserId: '5',
    relatedUserName: '박프론트',
    relatedItemId: '1'
  },
  {
    id: '2',
    type: 'comment',
    title: '새 댓글',
    message: '이영희님이 회원님의 게시글에 댓글을 남겼습니다.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2시간 전
    isRead: false,
    link: '/community/1',
    relatedUserId: '2',
    relatedUserName: '이영희',
    relatedItemId: '1'
  },
  {
    id: '3',
    type: 'like',
    title: '좋아요',
    message: '김철수님이 회원님의 프로젝트를 좋아합니다.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5시간 전
    isRead: true,
    link: '/projects/2',
    relatedUserId: '1',
    relatedUserName: '김철수',
    relatedItemId: '2'
  },
  {
    id: '4',
    type: 'project_application',
    title: '프로젝트 지원',
    message: '이코더님이 "블록체인 투표 시스템" 프로젝트의 백엔드 개발자 포지션에 지원했습니다.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1일 전
    isRead: true,
    link: '/projects/2',
    relatedUserId: '6',
    relatedUserName: '이코더',
    relatedItemId: '2'
  }
];
