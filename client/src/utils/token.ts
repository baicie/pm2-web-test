import { useEnv } from './hooks';

const TOKEN = 'token';

const { isSSR } = useEnv();

export function getToken() {
  return isSSR ? '' : localStorage.getItem(TOKEN);
}

export function setToken(token: string) {
  isSSR ? '' : localStorage.setItem(TOKEN, token);
}

export function clearLocalStorage() {
  isSSR ? '' : localStorage.clear();
}
