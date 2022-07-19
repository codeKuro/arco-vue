<template>
  <div class="container">
    <a-card class="general-card">
      <a-tabs
        v-model="activeKey"
        default-active-key="1"
        @change="handleTabChange"
      >
        <a-tab-pane key="1" :title="$t('menu.card.tabOne')">
          <a-row v-if="activeKey == 1" style="margin-bottom: 16px">
            <a-col :span="16">
              <a-space>
                <a-button type="primary" @click="handleClickAdd">
                  <template #icon>
                    <icon-plus />
                  </template>
                  {{ $t('roleManagement.operation.create') }}
                </a-button>
                <a-popconfirm
                  :popup-visible="popupVisible"
                  :content="$t('roleManagement.button.confirmation.delete')"
                  @ok="handleClickConfirm"
                  @cancel="handleClickcancel"
                >
                  <a-button type="primary" @click="handleClickDeleteAll">
                    <template #icon>
                      <icon-delete />
                    </template>
                    {{ $t('roleManagement.operation.delete') }}
                  </a-button>
                </a-popconfirm>
              </a-space>
            </a-col>
          </a-row>
          <a-table
            v-if="activeKey == 1"
            v-model:selectedKeys="selectedKeys"
            row-key="id"
            :loading="loading"
            :data="renderData"
            :bordered="false"
            :row-selection="rowSelection"
            :pagination="false"
          >
            <template #columns>
              <!-- <a-table-column
                :title="$t('roleManagement.columns.type')"
                data-index="type"
              >
                <template #cell="{ record }">
                  {{ $t(`roleManagement.form.type.${record.type}`) }}
                </template>
              </a-table-column> -->
              <a-table-column
                :title="$t('roleManagement.columns.id')"
                data-index="id"
              />
              <a-table-column
                :title="$t('roleManagement.columns.name')"
                data-index="name"
              />
              <a-table-column
                :title="$t('roleManagement.columns.identify')"
                data-index="identify"
              />
              <a-table-column
                :title="$t('roleManagement.columns.createdAt')"
                data-index="createdAt"
              />
              <a-table-column
                :title="$t('roleManagement.columns.status')"
                data-index="status"
              >
                <template #cell="{ record }">
                  <a-space>
                    <a-switch
                      v-model="record.status"
                      :disabled="record.id === '1' ? true : false"
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
                :title="$t('roleManagement.columns.operations')"
                data-index="operations"
              >
                <template #cell="{ record }">
                  <a-button
                    :disabled="record.identify === 'super_admin' ? true : false"
                    status="success"
                    size="small"
                    @click="handleClickEdit(record)"
                  >
                    <template #icon>
                      <icon-edit />
                    </template>
                    {{ $t('roleManagement.columns.operations.edit') }}
                  </a-button>
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" :title="$t('menu.card.tabTwo')">
          <a-row v-if="activeKey == 2" style="margin-bottom: 16px">
            <a-col :span="16">
              <a-space>
                <a-button type="primary" @click="handleClickAdd">
                  <template #icon>
                    <icon-plus />
                  </template>
                  {{ $t('roleManagement.operation.create') }}
                </a-button>
                <a-popconfirm
                  :popup-visible="popupVisible"
                  :content="$t('roleManagement.button.confirmation.delete')"
                  @ok="handleClickConfirm"
                  @cancel="handleClickcancel"
                >
                  <a-button type="primary" @click="handleClickDeleteAll">
                    <template #icon>
                      <icon-delete />
                    </template>
                    {{ $t('roleManagement.operation.delete') }}
                  </a-button>
                </a-popconfirm>
              </a-space>
            </a-col>
          </a-row>
          <a-table
            v-if="activeKey == 2"
            v-model:selectedKeys="selectedKeys"
            row-key="id"
            :loading="loading"
            :data="renderData"
            :bordered="false"
            :row-selection="rowSelection"
            :pagination="false"
          >
            <template #columns>
              <!-- <a-table-column
                :title="$t('roleManagement.columns.type')"
                data-index="type"
              >
                <template #cell="{ record }">
                  {{ $t(`roleManagement.form.type.${record.type}`) }}
                </template>
              </a-table-column> -->
              <a-table-column
                :title="$t('roleManagement.columns.id')"
                data-index="id"
              />
              <a-table-column
                :title="$t('roleManagement.columns.name')"
                data-index="name"
              />
              <a-table-column
                :title="$t('roleManagement.columns.identify')"
                data-index="identify"
              />
              <a-table-column
                :title="$t('roleManagement.columns.createdAt')"
                data-index="createdAt"
              />
              <a-table-column
                :title="$t('roleManagement.columns.status')"
                data-index="status"
              >
                <template #cell="{ record }">
                  <a-space>
                    <a-switch
                      v-model="record.status"
                      :disabled="
                        record.identify === 'super_admin' ? true : false
                      "
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
                :title="$t('roleManagement.columns.operations')"
                data-index="operations"
              >
                <template #cell="{ record }">
                  <a-button
                    :disabled="record.identify === 'super_admin' ? true : false"
                    status="success"
                    size="small"
                    @click="handleClickEdit(record)"
                  >
                    <template #icon>
                      <icon-edit />
                    </template>
                    {{ $t('roleManagement.columns.operations.edit') }}
                  </a-button>
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-modal
      v-model:visible="visible"
      width="auto"
      :title="
        actionModel === 'add'
          ? $t('roleManagement.form.title.add')
          : $t('roleManagement.form.title.edit')
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
          v-show="false"
          field="type"
          :label="$t('roleManagement.form.type')"
          :rules="[
            {
              required: true,
              message: $t('roleManagement.form.placeholder.select'),
            },
          ]"
        >
          <a-select
            v-model="formModel.type"
            :options="typeOptions"
            :placeholder="$t('roleManagement.form.placeholder.select')"
          />
        </a-form-item>
        <a-form-item v-show="false" field="id">
          <a-input v-model="formModel.id" />
        </a-form-item>
        <a-form-item
          field="name"
          :label="$t('roleManagement.form.name')"
          :rules="[
            {
              required: true,
              message: $t('roleManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.name"
            :placeholder="$t('roleManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="appName"
          :label="$t('roleManagement.form.appName')"
          :rules="[
            {
              required: true,
              message: $t('roleManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.appName"
            :placeholder="$t('roleManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="nodeIds"
          :label="$t('roleManagement.form.nodeIds')"
          :rules="[
            {
              required: true,
              message: $t('roleManagement.form.placeholder.select'),
            },
          ]"
        >
          <a-tree-select
            v-model="formModel.nodeIds"
            :allow-search="true"
            :allow-clear="true"
            :tree-checkable="true"
            :tree-check-strictly="true"
            :max-tag-count="4"
            :data="treeData"
            :placeholder="$t('roleManagement.form.placeholder.select')"
            :dropdown-style="{ minHeight: '300px', overflow: 'auto' }"
            @change="onChange"
          ></a-tree-select>
        </a-form-item>
        <a-form-item
          field="identify"
          :label="$t('roleManagement.form.identify')"
          :rules="[
            {
              required: true,
              message: $t('roleManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.identify"
            :placeholder="$t('roleManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item field="scopes" :label="$t('menuManagement.form.scopes')">
          <a-space size="large">
            <a-radio-group v-model="formModel.scopes" :disabled="true">
              <a-radio value="admin">{{
                $t('roleManagement.form.scopes.admin')
              }}</a-radio>
              <a-radio value="member">{{
                $t('roleManagement.form.scopes.member')
              }}</a-radio>
            </a-radio-group>
          </a-space>
        </a-form-item>
        <a-form-item field="sort" :label="$t('roleManagement.form.sort')">
          <a-input-number
            v-model="formModel.sort"
            :placeholder="$t('roleManagement.form.placeholder.input')"
            :min="0"
            mode="button"
          />
        </a-form-item>
        <a-form-item field="status" :label="$t('roleManagement.form.status')">
          <a-switch
            v-model="formModel.status"
            :checked-value="1"
            :unchecked-value="0"
          />
        </a-form-item>
        <a-form-item field="remark" :label="$t('roleManagement.form.remark')">
          <a-textarea
            v-model="formModel.remark"
            :placeholder="$t('roleManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button
              :loading="loadingSubmit"
              type="primary"
              html-type="submit"
              >{{ $t('roleManagement.button.submit') }}</a-button
            >
            <a-button type="outline" @click="$refs.formRef.resetFields()">{{
              $t('roleManagement.button.reset')
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
    queryRoleList,
    RoleRecord,
    RoleParams,
    createRoleRecord,
    getRoleRecord,
    updateRoleRecord,
    deleteRoleRecord,
    RoleIdList,
    updateRoleStatusRecord,
  } from '@/api/authority';
  import { TreeItem, queryMenuList } from '@/api/serve';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { transformRoutes } from '@/utils';

  const generateFormModel = () => {
    return {
      id: '',
      type: 1,
      appName: '',
      name: '',
      identify: '',
      remark: '',
      status: 0,
      sort: 0,
      scopes: 'admin',
      createdAt: '',
      isSupperRole: 0,
      nodeIds: '',
    };
  };
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const activeKey = ref('1');
  const renderData = ref<RoleRecord[]>([]);
  const formRef = ref<FormInstance>();
  const formModel = ref(generateFormModel());
  const switchLoading = ref(false);
  const visible = ref(false);
  const popupVisible = ref(false);
  const actionModel = ref();
  const selectedKeys = ref([]);
  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    checkStrictly: true,
  });
  const treeData = ref<Array<TreeItem>>([]);
  const loadingSubmit = ref(false);
  const typeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('roleManagement.form.type.1'),
      value: 1,
    },
    {
      label: t('roleManagement.form.type.2'),
      value: 2,
    },
  ]);
  const fetchData = async (
    params: RoleParams = activeKey.value === '1'
      ? { scopes: 'member' }
      : { scopes: 'admin' }
  ) => {
    setLoading(true);
    try {
      const { data } = await queryRoleList(params);
      const dataMenu = await queryMenuList(params);
      renderData.value = data.roleList;
      treeData.value = transformRoutes(dataMenu.data.nodeTree);
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      setLoading(false);
    }
  };
  fetchData();
  const handleTabChange = (key: any) => {
    activeKey.value = key;
    fetchData();
  };
  const handleClickAdd = () => {
    actionModel.value = 'add';
    formRef.value?.resetFields();
    if (activeKey.value === '1') {
      formModel.value.scopes = 'member';
    } else {
      formModel.value.scopes = 'admin';
    }
    visible.value = true;
  };
  const handleClickDeleteAll = () => {
    console.log(selectedKeys);
    if (!selectedKeys.value.length)
      Message.error(t('roleManagement.button.confirmation.deleteAll'));
    else popupVisible.value = true;
  };
  const handleClickConfirm = async (
    data: RoleIdList = { ids: selectedKeys.value }
  ) => {
    setLoading(true);
    try {
      await deleteRoleRecord(data);
      fetchData();
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      setLoading(false);
      popupVisible.value = false;
    }
  };
  const handleClickcancel = () => {
    popupVisible.value = false;
  };
  const handleClickEdit = async (row: { id: any }) => {
    setLoading(true);
    actionModel.value = 'edit';
    try {
      const { data } = await getRoleRecord({ id: row.id });
      const rowTrans = Object.keys(data).reduce(
        (previousValue, currentValue) => {
          previousValue[currentValue] = {
            value: data[currentValue],
          };
          return previousValue;
        },
        {}
      );
      rowTrans.nodeIds.value = rowTrans.nodeIds.value.split(',');
      formRef.value?.setFields(rowTrans);
      visible.value = true;
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      setLoading(false);
    }
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
      console.log(formModel.value);
      formatForm.nodeIds = formatForm.nodeIds.toString();
      if (actionModel.value === 'add') {
        try {
          await createRoleRecord(formatForm);
          Message.success(t('roleManagement.form.add.success'));
          loadingSubmit.value = false;
          fetchData();
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
          visible.value = false;
        }
      } else {
        try {
          await updateRoleRecord(formatForm);
          Message.success(t('roleManagement.form.edit.success'));
          loadingSubmit.value = false;
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
      const { data } = await updateRoleStatusRecord({ id: row.id });
      Message.success(t('roleManagement.form.edit.success'));
      fetchData();
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      switchLoading.value = false;
    }
  };
  function onChange() {
    console.log(formModel);
  }
</script>

<script lang="ts">
  export default {
    name: 'RoleManagement',
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
