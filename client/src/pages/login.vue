<template>
  <BaseLayout>
    <BcPage :body-style="bcPageStyle">
      <el-form
        :model="formState"
        name="basic"
        :label-col="{ span: 9 }"
        :wrapper-col="{ span: 15 }"
        autocomplete="off"
      >
        <el-form-item
          :label="$t('login.register.username')"
          name="username"
          :rules="[{ required: true, message: $t('login.register.usernameMessage') }]"
        >
          <el-input v-model="formState.username" />
        </el-form-item>

        <el-form-item
          :label="$t('login.register.password')"
          name="password"
          :rules="[{ required: true, message: $t('login.register.passwordsMessage') }]"
        >
          <el-input type="password" v-model="formState.password" />
        </el-form-item>

        <el-form-item
          v-if="!has_admin"
          :label="$t('login.register.passwordConfirmation')"
          name="passwordConfirmation"
          :rules="[
            {
              required: true,
              message: $t('login.register.passwordConfirmationMessage')
            }
          ]"
        >
          <el-input type="password" v-model="formState.passwordConfirmation" />
        </el-form-item>

        <el-form-item :style="{ width: '100%' }">
          <el-button type="primary" html-type="submit" @click="handleAdmin">
            <template v-if="has_admin">
              {{ $t('login.register.loginButton') }}
            </template>
            <template v-else>{{ $t('login.register.registerButton') }}</template>
          </el-button>
        </el-form-item>
      </el-form>
    </BcPage>
  </BaseLayout>
</template>
<script lang="ts" setup>
// # config import
import { storeToRefs } from 'pinia';
import { CSSProperties, reactive } from 'vue';
import { useRouter } from 'vue-router';
import BaseLayout from '../components/layout/base-layout.vue';
import { HOMEHOME } from '../routes/route-name';
import { globalConfigStore } from '../store/base-config';
import { UserFont, useUserStore } from '../store/user';
// # base state
const router = useRouter();
const formState = reactive<UserFont>({
  username: '',
  password: '',
  passwordConfirmation: ''
});
// # pinia
const { has_admin, locale } = storeToRefs(globalConfigStore());
const { createAdmin, login } = useUserStore();
const { user } = storeToRefs(useUserStore());
// # computed
// # watch
// # function
async function handleAdmin() {
  // 注册或者登录
  if (has_admin.value) {
    const res = await login(formState);

    if (res) {
      router.push({
        name: HOMEHOME,
        query: {}
      });
    }
  } else {
    await createAdmin(formState);
  }
}

// # lifecycle

// # style
const bcPageStyle: CSSProperties = {
  justifyContent: 'center',
  alignContent: 'center'
};
</script>
<style lang="less" scoped>
:deep(.ant-form-item-control-input-content) {
  display: flex;
  justify-content: center;
}
</style>
