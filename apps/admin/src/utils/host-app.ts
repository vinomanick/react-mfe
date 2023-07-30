import { PostMessage, PostMessageType } from '../interfaces';

export const sendMessageToHost = ({ type, payload = {} }: PostMessage) => {
  return parent.postMessage({ type, payload }, window.location.origin);
};

export const navigateToHostRoute = ({ route }: { route: string }) => {
  return sendMessageToHost({
    type: PostMessageType.navigateToHost,
    payload: { route },
  });
};
