export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  remindBefore: number;
  notified?: boolean; // 👈 add this
};

