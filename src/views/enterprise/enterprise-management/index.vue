<template>
  <div class="container">
    <a-card class="general-card" style="padding-top: 16px">
      <a-row style="margin-bottom: 16px">
        <a-col :flex="1">
          <a-form
            :model="searchModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item
                  field="name"
                  :label="$t('enterpriseManagement.form.name')"
                >
                  <a-input
                    v-model="searchModel.name"
                    :placeholder="
                      $t('enterpriseManagement.form.placeholder.input')
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="status"
                  :label="$t('enterpriseManagement.form.status')"
                >
                  <a-select
                    v-model="searchModel.status"
                    :options="statusOptions"
                    :placeholder="$t('enterpriseManagement.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="createdAt"
                  :label="$t('enterpriseManagement.form.createdAt')"
                >
                  <a-range-picker
                    v-model="searchModel.createdTime"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('enterpriseManagement.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('enterpriseManagement.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="16">
          <a-space>
            <a-button type="primary" @click="handleClickAdd">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('enterpriseManagement.operation.create') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :data="renderData"
        :bordered="false"
        @page-change="onPageChange"
      >
        <template #columns>
          <a-table-column
            :title="$t('enterpriseManagement.columns.id')"
            data-index="id"
          />
          <a-table-column
            :title="$t('enterpriseManagement.columns.name')"
            data-index="name"
          />
          <a-table-column
            :title="$t('enterpriseManagement.columns.maxTeamNum')"
            data-index="maxTeamNum"
          />
          <a-table-column
            :title="$t('enterpriseManagement.columns.teamNum')"
            data-index="teamNum"
          />
          <a-table-column
            :title="$t('enterpriseManagement.columns.maxMemberNum')"
            data-index="maxMemberNum"
          />
          <a-table-column
            :title="$t('enterpriseManagement.columns.createdAt')"
            data-index="createdAt"
          />
          <a-table-column
            :title="$t('enterpriseManagement.columns.status')"
            data-index="status"
          >
            <template #cell="{ record }">
              <a-space>
                <a-switch
                  v-model="record.status"
                  :loading="switchLoading"
                  :checked-value="1"
                  :unchecked-value="0"
                  @change="handleStatusChange(record)"
                >
                  <template #checked-icon>
                    <icon-check />
                  </template>
                  <template #unchecked-icon>
                    <icon-close />
                  </template>
                </a-switch>
              </a-space>
            </template>
          </a-table-column>
          <a-table-column
            :title="$t('enterpriseManagement.columns.operations')"
            :align="'center'"
            data-index="operations"
          >
            <template #cell="{ record }">
              <a-space>
                <a-button
                  status="success"
                  size="small"
                  @click="handleClickEdit(record)"
                >
                  <template #icon>
                    <icon-user-group />
                  </template>
                  {{ $t('enterpriseManagement.columns.operations.team') }}
                </a-button>
                <a-button
                  status="success"
                  size="small"
                  @click="handleClickBand(record)"
                >
                  <template #icon>
                    <icon-apps />
                  </template>
                  {{ $t('enterpriseManagement.columns.operations.product') }}
                </a-button>
              </a-space>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </a-card>
    <a-modal
      v-model:visible="visible"
      width="auto"
      :title="
        actionModel === 'add'
          ? $t('enterpriseManagement.form.title.add')
          : $t('enterpriseManagement.form.title.edit')
      "
      :footer="false"
    >
      <a-form
        ref="formRef"
        :model="formModel"
        :style="{ width: '600px' }"
        @submit="handleSubmit"
      >
        <a-form-item
          field="name"
          :label="$t('enterpriseManagement.form.name')"
          :rules="[
            {
              required: true,
              message: $t('enterpriseManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.name"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="maxTeamNum"
          :label="$t('enterpriseManagement.form.maxTeamNum')"
          :rules="[
            {
              required: true,
              message: $t('enterpriseManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input-number
            v-model="formModel.maxTeamNum"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="maxMemberNum"
          :label="$t('enterpriseManagement.form.maxMemberNum')"
          :rules="[
            {
              required: true,
              message: $t('enterpriseManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input-number
            v-model="formModel.maxMemberNum"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="nickname"
          :label="$t('enterpriseManagement.form.nickname')"
          :rules="[
            {
              required: true,
              message: $t('enterpriseManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.nickname"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="password"
          :label="$t('enterpriseManagement.form.password')"
          :rules="[
            {
              required: true,
              message: $t('enterpriseManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input-password
            v-model="formModel.password"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="passwordConfirm"
          :label="$t('enterpriseManagement.form.password.confirm')"
          :rules="rulesConfirmPassword"
        >
          <a-input-password
            v-model="formModel.passwordConfirm"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="email"
          :label="$t('enterpriseManagement.form.email')"
          :rules="[
            {
              required: true,
              message: $t('enterpriseManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.email"
            :placeholder="$t('enterpriseManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button
              :loading="loadingSubmit"
              type="primary"
              html-type="submit"
              >{{ $t('enterpriseManagement.button.submit') }}</a-button
            >
            <a-button type="outline" @click="$refs.formRef.resetFields()">{{
              $t('enterpriseManagement.button.reset')
            }}</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import {
    queryEnterpriseList,
    getEnterpriseRecord,
    EnterpriseRecord,
    EnterpriseParams,
    createEnterpriseRecord,
    updateEnterpriseRecord,
  } from '@/api/enterprise';
  import { Pagination } from '@/types/global';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';

  const searchFormModel = () => {
    return {
      name: '',
      status: -1,
      create_start_time: '',
      create_end_time: '',
      createdTime: [],
    };
  };
  const generateFormModel = () => {
    return {
      name: '',
      maxTeamNum: '',
      maxMemberNum: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      email: '',
    };
  };
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<EnterpriseRecord[]>([]);
  const searchModel = ref(searchFormModel());
  const formRef = ref<FormInstance>();
  const formModel = ref(generateFormModel());
  const switchLoading = ref(false);
  const visible = ref(false);
  const actionModel = ref();
  const loadingSubmit = ref(false);
  const basePagination: Pagination = {
    page: 1,
    size: 10,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const statusOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('enterpriseManagement.form.status.-1'),
      value: -1,
    },
    {
      label: t('enterpriseManagement.form.status.0'),
      value: 0,
    },
    {
      label: t('enterpriseManagement.form.status.1'),
      value: 1,
    },
  ]);
  const rulesConfirmPassword = [
    {
      required: true,
      message: t('enterpriseManagement.form.placeholder.input'),
    },
    {
      validator: (value: string, cb: (arg0: string) => void) => {
        return new Promise<void>((resolve) => {
          window.setTimeout(() => {
            if (value !== formModel.value.password) {
              cb(t('enterpriseManagement.form.password.confirm.errMsg'));
            }
            resolve();
          }, 100);
        });
      },
    },
  ];
  const fetchData = async (
    params: EnterpriseParams = { page: 1, size: 10 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryEnterpriseList(params);
      renderData.value = data.list;
      pagination.page = params.page;
      pagination.total = data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const search = () => {
    console.log(searchModel.value);
    const formatForm = JSON.parse(JSON.stringify(searchModel.value));
    if (
      formatForm.createdTime instanceof Array &&
      formatForm.createdTime.length > 0
    ) {
      // eslint-disable-next-line prefer-destructuring
      formatForm.create_start_time = formatForm.createdTime[0];
      // eslint-disable-next-line prefer-destructuring
      formatForm.create_end_time = formatForm.createdTime[1];
    }
    fetchData({
      ...basePagination,
      ...formatForm,
    } as unknown as EnterpriseParams);
  };
  const onPageChange = (page: number) => {
    fetchData({ ...basePagination, page });
  };
  fetchData();
  const reset = () => {
    searchModel.value = searchFormModel();
  };
  const handleClickAdd = async () => {
    formRef.value?.resetFields();
    setLoading(true);
    try {
      const { data } = await getEnterpriseRecord();
      formModel.value.maxTeamNum = data.maxTeamNum;
      formModel.value.maxMemberNum = data.maxMemberNum;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
    actionModel.value = 'add';
    visible.value = true;
  };
  const handleClickEdit = (row: any) => {
    console.log(row);
  };
  const handleClickBand = (row: any) => {
    console.log(row);
  };
  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (!errors) {
      setLoading(true);
      loadingSubmit.value = true;
      const formatForm = JSON.parse(JSON.stringify(formModel.value));
      if (actionModel.value === 'add') {
        try {
          await createEnterpriseRecord(formatForm);
          Message.success(t('enterpriseManagement.form.add.success'));
          fetchData();
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
          loadingSubmit.value = false;
          visible.value = false;
        }
      } else {
        try {
          await updateEnterpriseRecord(formatForm);
          Message.success(t('enterpriseManagement.form.edit.success'));
          fetchData();
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
          loadingSubmit.value = false;
          visible.value = false;
        }
      }
    }
  };
  const handleStatusChange = async (row: { id: any }) => {
    switchLoading.value = true;
    try {
      const { data } = await updateEnterpriseRecord({ id: row.id });
      Message.success(t('enterpriseManagement.form.edit.success'));
      fetchData();
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      switchLoading.value = false;
    }
  };
</script>

<script lang="ts">
  export default {
    name: 'EnterpriseManagement',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 20px 20px 20px 20px;
  }

  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
</style>
