<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.authority', 'menu.authority.administratorsManagement']"
    />
    <a-card
      class="general-card"
      :title="$t('menu.authority.administratorsManagement')"
    >
      <a-row style="margin-bottom: 16px">
        <a-col :span="16">
          <a-space>
            <a-button type="primary" @click="handleClickAdd">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('administratorsManagement.operation.create') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="true"
        :data="renderData"
        :bordered="false"
        @page-change="onPageChange"
      >
        <template #columns>
          <a-table-column
            :title="$t('administratorsManagement.columns.id')"
            data-index="id"
          />
          <a-table-column
            :title="$t('administratorsManagement.columns.username')"
            data-index="username"
          />
          <a-table-column
            :title="$t('administratorsManagement.columns.nickname')"
            data-index="nickname"
          />
          <a-table-column
            :title="$t('administratorsManagement.columns.mobile')"
            data-index="mobile"
          />
          <a-table-column
            :title="$t('administratorsManagement.columns.email')"
            data-index="email"
          />
          <a-table-column
            :title="$t('administratorsManagement.columns.status')"
            data-index="status"
          >
            <template #cell="{ record }">
              <a-space>
                <a-switch
                  v-model="record.status"
                  :disabled="record.isSuperAdmin === 1 ? true : false"
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
            :title="$t('administratorsManagement.columns.operations')"
            :align="'center'"
            data-index="operations"
          >
            <template #cell="{ record }">
              <a-space>
                <a-button
                  :disabled="record.isSuperAdmin === 1 ? true : false"
                  status="success"
                  size="small"
                  @click="handleClickEdit(record)"
                >
                  <template #icon>
                    <icon-edit />
                  </template>
                  {{ $t('administratorsManagement.columns.operations.edit') }}
                </a-button>
                <a-button
                  :disabled="record.isSuperAdmin === 1 ? true : false"
                  status="success"
                  size="small"
                  @click="handleClickBand(record)"
                >
                  <template #icon>
                    <icon-subscribe-add />
                  </template>
                  {{
                    $t('administratorsManagement.columns.operations.roleBand')
                  }}
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
          ? $t('administratorsManagement.form.title.add')
          : $t('administratorsManagement.form.title.edit')
      "
      :footer="false"
    >
      <a-form
        ref="formRef"
        :model="formModel"
        :style="{ width: '600px' }"
        @submit="handleSubmit"
      >
        <a-form-item v-show="false" field="id">
          <a-input v-model="formModel.id" />
        </a-form-item>
        <a-form-item
          field="username"
          :label="$t('administratorsManagement.form.username')"
          :rules="[
            {
              required: true,
              message: $t('administratorsManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.username"
            :placeholder="$t('administratorsManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="nickname"
          :label="$t('administratorsManagement.form.nickname')"
          :rules="[
            {
              required: true,
              message: $t('administratorsManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.nickname"
            :placeholder="$t('administratorsManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="password"
          :label="$t('administratorsManagement.form.password')"
          :rules="[
            {
              required: true,
              message: $t('administratorsManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.password"
            :placeholder="$t('administratorsManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="mobile"
          :label="$t('administratorsManagement.form.mobile')"
          :rules="[
            {
              required: true,
              message: $t('administratorsManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.mobile"
            :placeholder="$t('administratorsManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="email"
          :label="$t('administratorsManagement.form.email')"
          :rules="[
            {
              required: true,
              message: $t('administratorsManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.email"
            :placeholder="$t('administratorsManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="status"
          :label="$t('administratorsManagement.form.status')"
        >
          <a-switch
            v-model="formModel.status"
            :checked-value="1"
            :unchecked-value="0"
          />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary" html-type="submit">{{
              $t('administratorsManagement.button.submit')
            }}</a-button>
            <a-button type="outline" @click="$refs.formRef.resetFields()">{{
              $t('administratorsManagement.button.reset')
            }}</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { Message } from '@arco-design/web-vue';
  import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
  import {
    queryAdministratorsList,
    AdministratorsRecord,
    AdministratorsParams,
    createAdministratorsRecord,
    updateAdministratorsRecord,
    updateAdministratorsStatusRecord,
  } from '@/api/authority';
  import { Pagination } from '@/types/global';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const generateFormModel = () => {
    return {
      id: '',
      username: '',
      nickname: '',
      password: '',
      mobile: '',
      email: '',
      avatar: '',
      // isSupperRole: 0,
      // isSuperAdmin: 0,
      // roleNames: '',
      // roleIds: '',
      status: 0,
    };
  };
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<AdministratorsRecord[]>([]);
  const formRef = ref<FormInstance>();
  const formModel = ref(generateFormModel());
  const switchLoading = ref(false);
  const visible = ref(false);
  const actionModel = ref();
  const basePagination: Pagination = {
    page: 1,
    size: 10,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const fetchData = async (
    params: AdministratorsParams = { page: 1, size: 10 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryAdministratorsList(params);
      renderData.value = data.list;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  const onPageChange = (page: number) => {
    fetchData({ ...basePagination, page });
  };
  fetchData();
  const handleClickAdd = () => {
    actionModel.value = 'add';
    formRef.value?.resetFields();
    visible.value = true;
  };
  const handleClickEdit = (row: any) => {
    actionModel.value = 'edit';
    const rowTrans = Object.keys(row).reduce((previousValue, currentValue) => {
      previousValue[currentValue] = {
        value: row[currentValue],
      };
      return previousValue;
    }, {});
    formRef.value?.setFields(rowTrans);
    visible.value = true;
  };
  const handleClickBand = (row: any) => {
    console.log(row);
    visible.value = true;
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
      const formatForm = JSON.parse(JSON.stringify(formModel.value));
      if (actionModel.value === 'add') {
        try {
          await createAdministratorsRecord(formatForm);
          Message.success(t('administratorsManagement.form.add.success'));
          fetchData();
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
          visible.value = false;
        }
      } else {
        try {
          await updateAdministratorsRecord(formatForm);
          Message.success(t('administratorsManagement.form.edit.success'));
          fetchData();
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
          visible.value = false;
        }
      }
    }
  };
  const handleStatusChange = async (row: { id: any }) => {
    switchLoading.value = true;
    try {
      const { data } = await updateAdministratorsStatusRecord({ id: row.id });
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
    name: 'AdministratorsManagement',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }

  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
</style>
