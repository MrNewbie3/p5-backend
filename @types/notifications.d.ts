import INotificationDetail from "./notification_detail";
import ICreateUser from "./user";

interface INotifications {
  notification_id: number;
  user: ICreateUser;
  user_id: number;
  status: string;
  created_at: Date;
  notification_details: INotificationDetail[];
}

export default INotifications;
