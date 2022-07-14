/* eslint-disable prefer-destructuring */
<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.enterprise', 'menu.enterprise.enterpriseMemberManagement']"
    />
    <a-card
      class="general-card"
      :title="$t('menu.enterprise.enterpriseMemberManagement')"
    >
      <a-row style="margin-bottom: 16px">
        <a-col :flex="1">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item
                  field="nickname"
                  :label="$t('enterpriseMemberManagement.form.nickname')"
                >
                  <a-input
                    v-model="formModel.nickname"
                    :placeholder="
                      $t('enterpriseMemberManagement.form.selectDefault')
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="email"
                  :label="$t('enterpriseMemberManagement.form.email')"
                >
                  <a-input
                    v-model="formModel.email"
                    :placeholder="
                      $t('enterpriseMemberManagement.form.email.placeholder')
                    "
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="createdAt"
                  :label="$t('enterpriseMemberManagement.form.createdAt')"
                >
                  <a-range-picker
                    v-model="formModel.createdTime"
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
              {{ $t('enterpriseMemberManagement.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('enterpriseMemberManagement.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
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
            :title="$t('enterpriseMemberManagement.columns.id')"
            data-index="id"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.nickname')"
            data-index="nickname"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.email')"
            data-index="email"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.emailVerified')"
            data-index="emailVerified"
          >
            <template #cell="{ record }">
              {{
                $t(
                  `enterpriseMemberManagement.form.emailVerified.${record.emailVerified}`
                )
              }}
            </template>
          </a-table-column>
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.lastLoginIp')"
            data-index="lastLoginIp"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.lastLoginAt')"
            data-index="lastLoginAt"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.relationCompanyNum')"
            data-index="relationCompanyNum"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.createdAt')"
            data-index="createdAt"
          />
          <a-table-column
            :title="$t('enterpriseMemberManagement.columns.operations')"
            :align="'center'"
            data-index="operations"
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
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { Message } from '@arco-design/web-vue';
  import {
    queryEnterpriseMemberList,
    EnterpriseMemberRecord,
    EnterpriseParams,
    updateEnterpriseMemberRecord,
  } from '@/api/enterprise';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import { Pagination } from '@/types/global';

  const generateFormModel = () => {
    return {
      nickname: '',
      email: '',
      create_start_time: '',
      create_end_time: '',
      createdTime: [],
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<EnterpriseMemberRecord[]>([]);
  const formModel = ref(generateFormModel());
  const switchLoading = ref(false);
  const basePagination: Pagination = {
    page: 1,
    size: 10,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const fetchData = async (
    params: EnterpriseParams = { page: 1, size: 10 }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryEnterpriseMemberList(params);
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
    console.log(formModel.value);
    const formatForm = JSON.parse(JSON.stringify(formModel.value));
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
    formModel.value = generateFormModel();
  };
  const handleStatusChange = async (row: { id: any }) => {
    switchLoading.value = true;
    try {
      const { data } = await updateEnterpriseMemberRecord({ id: row.id });
      Message.success(t('enterpriseMemberManagement.form.edit.success'));
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
    name: 'EnterpriseMemberManagement',
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
