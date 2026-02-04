import type { Notification } from '../types/notification';

const API_BASE_URL = '/api'; // 백엔드 API URL (환경변수로 관리 권장)

/**
 * 알림 서비스
 * 백엔드 API 연동 준비 완료
 */
export const notificationService = {
  /**
   * 사용자 알림 목록 조회
   */
  async getNotifications(userId: string): Promise<Notification[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications?userId=${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}` // 인증 토큰 추가 필요
        },
      });

      if (!response.ok) {
        throw new Error('알림 조회 실패');
      }

      return response.json();
    } catch (error) {
      console.error('알림 조회 중 오류 발생:', error);
      throw error;
    }
  },

  /**
   * 알림 읽음 처리
   */
  async markAsRead(notificationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('알림 읽음 처리 실패');
      }

      return true;
    } catch (error) {
      console.error('알림 읽음 처리 중 오류 발생:', error);
      throw error;
    }
  },

  /**
   * 모든 알림 읽음 처리
   */
  async markAllAsRead(userId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/read-all`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error('모든 알림 읽음 처리 실패');
      }

      return true;
    } catch (error) {
      console.error('모든 알림 읽음 처리 중 오류 발생:', error);
      throw error;
    }
  },

  /**
   * 알림 삭제
   */
  async deleteNotification(notificationId: string): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('알림 삭제 실패');
      }

      return true;
    } catch (error) {
      console.error('알림 삭제 중 오류 발생:', error);
      throw error;
    }
  },
};
