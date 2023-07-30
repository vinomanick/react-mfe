export enum PostMessageType {
  navigateToHost = 'navigateToHost',
}

export interface PostMessage {
  type: PostMessageType;
  payload?: Record<string, any>;
}
