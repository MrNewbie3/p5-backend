import INotifications from "notifications";
interface CreateNotificationDetailDTO {
  notification_detail_id: number;
  notifications: INotifications;
  notification_id: number;
  message: string;
  headline: string;
  created_at: Date;
  constructor(notification_detail_id: number, notifications: INotifications, notification_id: number, message: string, headline: string, created_at: Date);
}
export default CreateNotificationDetailDTO;
