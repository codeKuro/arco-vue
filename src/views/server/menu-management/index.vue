<template>
  <div class="container">
    <Breadcrumb :items="['menu.server', 'menu.server.menuManagement']" />
    <a-card class="general-card" :title="$t('menu.server.menuManagement')">
      <a-tabs
        v-model="activeKey"
        default-active-key="1"
        @change="handleTabChange"
      >
        <a-tab-pane key="1" :title="$t('menu.card.tabOne')">
          <a-row v-if="activeKey == 1" style="margin-bottom: 16px">
            <a-col :span="16">
              <a-space>
                <a-button type="primary" @click="handleClickAdd(activeKey)">
                  <template #icon>
                    <icon-plus />
                  </template>
                  {{ $t('menuManagement.operation.create') }}
                </a-button>
                <a-popconfirm
                  :popup-visible="popupVisible"
                  :content="$t('menuManagement.button.confirmation.delete')"
                  @ok="handleClickConfirm"
                  @cancel="handleClickcancel"
                >
                  <a-button type="primary" @click="handleClickDeleteAll">
                    <template #icon>
                      <icon-delete />
                    </template>
                    {{ $t('menuManagement.operation.delete') }}
                  </a-button>
                </a-popconfirm>
              </a-space>
            </a-col>
            <!-- <a-col :span="8" style="text-align: right">
              <a-button>
                <template #icon>
                  <icon-download />
                </template>
                {{ $t('menuManagement.operation.download') }}
              </a-button>
            </a-col> -->
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
              <a-table-column
                :title="$t('menuManagement.columns.type')"
                data-index="type"
              >
                <template #cell="{ record }">
                  {{ $t(`menuManagement.form.type.${record.type}`) }}
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuManagement.columns.name')"
                data-index="name"
              />
              <a-table-column
                :title="$t('menuManagement.columns.identify')"
                data-index="identify"
              />
              <a-table-column
                :title="$t('menuManagement.columns.uri')"
                data-index="uri"
              >
              </a-table-column>
              <a-table-column
                :title="$t('menuManagement.columns.isMenu')"
                data-index="isMenu"
              >
                <template #cell="{ record }">
                  {{ $t(`menuManagement.form.isMenu.${record.isMenu}`) }}
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuManagement.columns.icon')"
                data-index="icon"
              />
              <a-table-column
                :title="$t('menuManagement.columns.status')"
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
                :title="$t('menuManagement.columns.operations')"
                data-index="operations"
              >
                <template #cell="{ record }">
                  <!-- <a-button type="text" size="small">
                    {{ $t('menuManagement.columns.operations.view') }}
                  </a-button> -->
                  <a-button
                    status="success"
                    size="small"
                    @click="handleClickEdit(record)"
                  >
                    <template #icon>
                      <icon-edit />
                    </template>
                    {{ $t('menuManagement.columns.operations.edit') }}
                  </a-button>
                  <!-- <a-popconfirm
                    :content="$t('menuManagement.button.confirmation.delete')"
                    @ok="handleClickConfirm"
                    @cancel="handleClickcancel"
                  >
                    <a-button
                      type="text"
                      size="small"
                      @click="handleClickDelete(record)"
                    >
                      <template #icon>
                        <icon-delete />
                      </template>
                      {{ $t('menuManagement.columns.operations.delete') }}
                    </a-button>
                  </a-popconfirm> -->
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" :title="$t('menu.card.tabTwo')">
          <a-row v-if="activeKey == 2" style="margin-bottom: 16px">
            <a-col :span="16">
              <a-space>
                <a-button type="primary" @click="handleClickAdd(activeKey)">
                  <template #icon>
                    <icon-plus />
                  </template>
                  {{ $t('menuManagement.operation.create') }}
                </a-button>
                <a-popconfirm
                  :popup-visible="popupVisible"
                  :content="$t('menuManagement.button.confirmation.delete')"
                  @ok="handleClickConfirm"
                  @cancel="handleClickcancel"
                >
                  <a-button type="primary" @click="handleClickDeleteAll">
                    <template #icon>
                      <icon-delete />
                    </template>
                    {{ $t('menuManagement.operation.delete') }}
                  </a-button>
                </a-popconfirm>
              </a-space>
            </a-col>
            <!-- <a-col :span="8" style="text-align: right">
              <a-button>
                <template #icon>
                  <icon-download />
                </template>
                {{ $t('menuManagement.operation.download') }}
              </a-button>
            </a-col> -->
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
              <a-table-column
                :title="$t('menuManagement.columns.type')"
                data-index="type"
              >
                <template #cell="{ record }">
                  {{ $t(`menuManagement.form.type.${record.type}`) }}
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuManagement.columns.name')"
                data-index="name"
              />
              <a-table-column
                :title="$t('menuManagement.columns.identify')"
                data-index="identify"
              />
              <a-table-column
                :title="$t('menuManagement.columns.uri')"
                data-index="uri"
              >
              </a-table-column>
              <a-table-column
                :title="$t('menuManagement.columns.isMenu')"
                data-index="isMenu"
              >
                <template #cell="{ record }">
                  {{ $t(`menuManagement.form.isMenu.${record.isMenu}`) }}
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuManagement.columns.icon')"
                data-index="icon"
              />
              <a-table-column
                :title="$t('menuManagement.columns.status')"
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
                :title="$t('menuManagement.columns.operations')"
                data-index="operations"
              >
                <template #cell="{ record }">
                  <!-- <a-button type="text" size="small">
                    {{ $t('menuManagement.columns.operations.view') }}
                  </a-button> -->
                  <a-button
                    status="success"
                    size="small"
                    @click="handleClickEdit(record)"
                  >
                    <template #icon>
                      <icon-edit />
                    </template>
                    {{ $t('menuManagement.columns.operations.edit') }}
                  </a-button>
                  <!-- <a-popconfirm
                    :content="$t('menuManagement.button.confirmation.delete')"
                    @ok="handleClickConfirm"
                    @cancel="handleClickcancel"
                  >
                    <a-button
                      type="text"
                      size="small"
                      @click="handleClickDelete(record)"
                    >
                      <template #icon>
                        <icon-delete />
                      </template>
                      {{ $t('menuManagement.columns.operations.delete') }}
                    </a-button>
                  </a-popconfirm> -->
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
          ? $t('menuManagement.form.title.add')
          : $t('menuManagement.form.title.edit')
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
          field="type"
          :label="$t('menuManagement.form.type')"
          :rules="[
            {
              required: true,
              message: $t('menuManagement.form.placeholder.select'),
            },
          ]"
        >
          <a-select
            v-model="formModel.type"
            :options="typeOptions"
            :placeholder="$t('menuManagement.form.placeholder.select')"
          />
        </a-form-item>
        <a-form-item v-show="false" field="id">
          <a-input v-model="formModel.id" />
        </a-form-item>
        <a-form-item
          field="name"
          :label="$t('menuManagement.form.name')"
          :rules="[
            {
              required: true,
              message: $t('menuManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.name"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="appName"
          :label="$t('menuManagement.form.appName')"
          :rules="[
            {
              required: true,
              message: $t('menuManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.appName"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item field="pid" :label="$t('menuManagement.form.pid')">
          <a-tree-select
            v-model="formModel.pid"
            :allow-search="true"
            :allow-clear="true"
            :data="treeData"
            :fallback-option="fallback"
            :placeholder="$t('menuManagement.form.placeholder.select')"
            @change="onChange"
          ></a-tree-select>
        </a-form-item>
        <a-form-item
          field="uri"
          :label="$t('menuManagement.form.uri')"
          :rules="[
            {
              required: true,
              message: $t('menuManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.uri"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          field="identify"
          :label="$t('menuManagement.form.identify')"
          :rules="[
            {
              required: true,
              message: $t('menuManagement.form.placeholder.input'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input
            v-model="formModel.identify"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item field="isMenu" :label="$t('menuManagement.form.isMenu')">
          <a-switch
            v-model="formModel.isMenu"
            :checked-value="1"
            :unchecked-value="0"
          />
        </a-form-item>
        <a-form-item field="scopes" :label="$t('menuManagement.form.scopes')">
          <a-space size="large">
            <a-radio-group v-model="formModel.scopes">
              <a-radio value="admin" :disabled="true">{{
                $t('menuManagement.form.scopes.admin')
              }}</a-radio>
              <a-radio value="member" :disabled="true">{{
                $t('menuManagement.form.scopes.member')
              }}</a-radio>
            </a-radio-group>
          </a-space>
        </a-form-item>
        <a-form-item field="icon" :label="$t('menuManagement.form.icon')">
          <IconSelector v-model:value="formModel.icon" />
        </a-form-item>
        <a-form-item
          field="urlQuery"
          :label="$t('menuManagement.form.urlQuery')"
        >
          <a-input
            v-model="formModel.urlQuery"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item field="target" :label="$t('menuManagement.form.target')">
          <a-input
            v-model="formModel.target"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item
          v-if="activeKey === '1' ? false : true"
          field="checkProduct"
          :label="$t('menuManagement.form.checkProduct')"
        >
          <a-switch
            v-model="formModel.checkProduct"
            :checked-value="1"
            :unchecked-value="0"
          />
        </a-form-item>
        <a-form-item field="sort" :label="$t('menuManagement.form.sort')">
          <a-input-number
            v-model="formModel.sort"
            :placeholder="$t('menuManagement.form.placeholder.input')"
            :min="0"
            mode="button"
          />
        </a-form-item>
        <a-form-item field="status" :label="$t('menuManagement.form.status')">
          <a-switch
            v-model="formModel.status"
            :checked-value="1"
            :unchecked-value="0"
          />
        </a-form-item>
        <a-form-item field="remark" :label="$t('menuManagement.form.remark')">
          <a-textarea
            v-model="formModel.remark"
            :placeholder="$t('menuManagement.form.placeholder.input')"
          />
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button type="primary" html-type="submit">{{
              $t('menuManagement.button.submit')
            }}</a-button>
            <a-button type="outline" @click="$refs.formRef.resetFields()">{{
              $t('menuManagement.button.reset')
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
    queryMenuList,
    getMenuRecord,
    MenuRecord,
    MenuParams,
    TreeItem,
    createMenuRecord,
    updateMenuRecord,
    deleteMenuRecord,
    MenuIdList,
    updateMenuStatusRecord,
  } from '@/api/serve';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { transformRoutes } from '@/utils';
  import IconSelector from '@/components/icon-selector/index.vue';

  const generateFormModel = () => {
    return {
      id: '',
      type: 1,
      appName: '',
      name: '',
      pid: '',
      uri: '',
      identify: '',
      isMenu: 0,
      scopes: '',
      icon: '',
      urlQuery: '',
      target: '',
      checkProduct: 0,
      status: 0,
      sort: 0,
      remark: '',
    };
  };
  const errorMessage = ref('');
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const activeKey = ref('1');
  const renderData = ref<MenuRecord[]>([]);
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
  const typeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('menuManagement.form.type.1'),
      value: 1,
    },
    {
      label: t('menuManagement.form.type.2'),
      value: 2,
    },
  ]);
  const fetchData = async (
    params: MenuParams = activeKey.value === '1'
      ? { scopes: 'admin' }
      : { scopes: 'member' }
  ) => {
    setLoading(true);
    console.log(activeKey);
    try {
      const { data } = await queryMenuList(params);
      renderData.value = data.nodeTree;
      treeData.value = transformRoutes(data.nodeTree);
    } catch (err) {
      // you can report use errorHandler or other
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
      formModel.value.scopes = 'admin';
    } else {
      formModel.value.scopes = 'member';
    }
    console.log(formModel);
    visible.value = true;
  };
  const handleClickDeleteAll = () => {
    console.log(selectedKeys);
    if (!selectedKeys.value.length)
      Message.error(t('menuManagement.button.confirmation.deleteAll'));
    else popupVisible.value = true;
  };
  const handleClickConfirm = async (
    data: MenuIdList = { ids: selectedKeys.value }
  ) => {
    setLoading(true);
    try {
      await deleteMenuRecord(data);
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
      const { data } = await getMenuRecord({ id: row.id });
      const rowTrans = Object.keys(data).reduce(
        (previousValue, currentValue) => {
          previousValue[currentValue] = {
            value: data[currentValue],
          };
          return previousValue;
        },
        {}
      );
      console.log(rowTrans);
      formRef.value?.setFields(rowTrans);
      visible.value = true;
    } catch (err) {
      // you can report use errorHandler or other
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
      console.log(actionModel.value);
      setLoading(true);
      const formatForm = JSON.parse(JSON.stringify(formModel.value));
      if (actionModel.value === 'add') {
        formatForm.id = undefined;
        try {
          await createMenuRecord(formatForm);
          Message.success(t('menuManagement.form.add.success'));
          fetchData();
        } catch (err) {
          errorMessage.value = (err as Error).message;
        } finally {
          setLoading(false);
          visible.value = false;
        }
      } else {
        try {
          await updateMenuRecord(formatForm);
          Message.success(t('menuManagement.form.edit.success'));
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
      const { data } = await updateMenuStatusRecord({ id: row.id });
      Message.success(t('menuManagement.form.edit.success'));
      fetchData();
    } catch (err) {
      // you can report use errorHandler or other
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
    name: 'MenuManagement',
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
