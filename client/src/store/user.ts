import { Router } from 'vue-router';
import { HOME, LOGIN } from '@/routes/route-name';
import { ElMessage } from 'element-plus';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import UserApi from '../api/user';
import { defaultErrorHandler, useI18nNotPinia } from '../utils';
import { defaultSucess } from '../utils/default-success';
import { clearLocalStorage, setToken } from '../utils/token';

export type UserRoleType = 'admin' | 'editor' | 'ghost';

export interface User {
  userid: string;
  role: UserRoleType;
  username: string;
  password: string;
}

export interface UserFont extends Pick<User, 'password' | 'username'> {
  passwordConfirmation: string;
}

export interface UserLogin extends Pick<User, 'password' | 'username'> {}

export interface UserWithToken extends User {
  token: string;
}

export const useUserStore = defineStore('user-store', () => {
  const { returnI18n } = useI18nNotPinia();
  const user = ref<UserWithToken>();

  const getUser = computed(() => user.value);

  async function createAdmin(params: UserFont) {
    try {
      if (params.passwordConfirmation !== params.password) {
        // @ts-ignore
        throw new Error(returnI18n('login.register.loginButton'));
      }
      const res = await UserApi.createAdmin<string>(params);

      defaultSucess(res);
    } catch (error) {
      defaultErrorHandler(error);
    }
  }

  async function login(params: UserLogin): Promise<boolean> {
    try {
      if (!params.password || !params.password) {
        throw new Error(returnI18n('login.register.loginButton'));
      }
      const res = await UserApi.login<UserWithToken>(params);
      user.value = res.data;
      setToken(user.value.token);
      ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success'
      });
      return true;
    } catch (error) {
      defaultErrorHandler(error);
      return false;
    }
  }

  async function loginOut(router: Router) {
    try {
      clearLocalStorage();
      router.push({
        name: LOGIN
      });
    } catch (error) {
      defaultErrorHandler(error);
      return false;
    }
  }

  return {
    user,
    createAdmin,
    login,
    loginOut
  };
});
