import { SMSText } from '@/activities/types/SMSText';

export type SMSTextCardProps = {
  text: SMSText;
  userViewed: UserViewed;
};

export type UserViewed = {
  phone: string;
  name: string;
};
