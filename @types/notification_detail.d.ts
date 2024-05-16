import INotifications from "./notifications";

interface INotificationDetail {
  notification_detail_id: number;
  notifications: INotifications;
  notification_id: number;
  message: string;
  headline: string;
  created_at: Date;
}

export default INotificationDetail;
