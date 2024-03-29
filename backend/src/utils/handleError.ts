import { MsgError } from '../types';

function handleError(msgError?: string, error?: unknown) {
  // eslint-disable-next-line no-console
  console.error(`${msgError}`, error);
  const msg: MsgError = { msg: `${msgError}` };
  return msg;
}

export default handleError;
