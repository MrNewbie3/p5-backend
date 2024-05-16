import { IsInt, IsNotEmpty, ValidateNested, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import INotifications from "notifications"; // Assuming INotifications is defined in a separate file

class CreateNotificationDetailDTO {
  @IsInt()
  notification_detail_id: number;

  @IsNotEmpty()
  @ValidateNested()
  notifications: INotifications;

  @IsInt()
  notification_id: number;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsString()
  headline: string;

  @IsDate()
  created_at: Date;

  constructor(notification_detail_id: number, notifications: INotifications, notification_id: number, message: string, headline: string, created_at: Date) {
    this.notification_detail_id = notification_detail_id;
    this.notifications = notifications;
    this.notification_id = notification_id;
    this.message = message;
    this.headline = headline;
    this.created_at = created_at;
  }
}

export default CreateNotificationDetailDTO;
