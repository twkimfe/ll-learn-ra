export interface BoardInfoType {
  _id: number;
  title: string;
  content: string;
  replies: ReplyType[];
}

export interface ReplyType {
  _id: number;
  content: string;
}