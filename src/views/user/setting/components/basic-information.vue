<template>
  <a-form
    ref="formRef"
    :model="formData"
    class="form"
    :label-col-props="{ span: 8 }"
    :wrapper-col-props="{ span: 16 }"
  >
    <a-form-item
      field="nickname"
      :label="$t('userSetting.basicInfo.form.label.nickname')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.nickname.required'),
        },
      ]"
    >
      <a-input
        v-model="formData.nickname"
        :placeholder="$t('userSetting.basicInfo.placeholder.nickname')"
      />
    </a-form-item>
    <a-form-item
      field="password"
      :label="$t('userSetting.basicInfo.form.label.password')"
    >
      <a-input
        v-model="formData.password"
        :placeholder="$t('userSetting.basicInfo.placeholder.password')"
      />
    </a-form-item>
    <a-form-item
      field="mobile"
      :label="$t('userSetting.basicInfo.form.label.mobile')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.mobile.required'),
        },
      ]"
    >
      <a-input
        v-model="formData.mobile"
        :placeholder="$t('userSetting.basicInfo.placeholder.mobile')"
      />
    </a-form-item>
    <a-form-item
      field="email"
      :label="$t('userSetting.basicInfo.form.label.email')"
      :rules="[
        {
          required: true,
          message: $t('userSetting.form.error.email.required'),
        },
      ]"
    >
      <a-input
        v-model="formData.email"
        :placeholder="$t('userSetting.basicInfo.placeholder.email')"
      />
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button type="primary" @click="submit">
          {{ $t('userSetting.save') }}
        </a-button>
        <a-button type="secondary" @click="reset">
          {{ $t('userSetting.reset') }}
        </a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { BasicInfoModel } from '@/api/user-center';
  import useLoading from '@/hooks/loading';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import { getUserInfo, updateUserInfo } from '@/api/user';

  const formRef = ref<FormInstance>();
  const formData = ref<BasicInfoModel>({
    nickname: '',
    password: '',
    mobile: '',
    email: '',
  });
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const submit = async () => {
    setLoading(true);
    const formatForm = JSON.parse(JSON.stringify(formData.value));
    try {
      await updateUserInfo(formatForm);
      Message.success(t('userSetting.form.edit.success'));
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      await getUserInfo();
      setLoading(false);
    }
  };
  const reset = async () => {
    await formRef.value?.resetFields();
  };
</script>

<style scoped lang="less">
  .form {
    width: 540px;
    margin: 0 auto;
  }
</style>
