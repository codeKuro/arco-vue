<template>
  <div class="container">
    <Breadcrumb :items="['menu.server', 'menu.server.menuManagement']" />
    <a-card class="general-card" :title="$t('menu.server.menuManagement')">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" :title="$t('menu.card.tabOne')">
          <a-row style="margin-bottom: 16px">
            <a-col :span="16">
              <a-space>
                <a-button type="primary" @click="handleClickAdd">
                  <template #icon>
                    <icon-plus />
                  </template>
                  {{ $t('menuManagement.operation.create') }}
                </a-button>
                <a-button type="primary" @click="handleClickDeleteAll">
                  <template #icon>
                    <icon-delete />
                  </template>
                  {{ $t('menuManagement.operation.delete') }}
                </a-button>
              </a-space>
            </a-col>
            <a-col :span="8" style="text-align: right">
              <a-button>
                <template #icon>
                  <icon-download />
                </template>
                {{ $t('menuManagement.operation.download') }}
              </a-button>
            </a-col>
          </a-row>
          <a-table
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
                :title="$t('menuManagement.columns.pid')"
                data-index="pid"
              >
              </a-table-column>
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
                :title="$t('menuManagement.columns.scopes')"
                data-index="scopes"
              >
                <template #cell="{ record }">
                  {{ $t(`menuManagement.form.scopes.${record.scopes}`) }}
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
                  <span
                    v-if="record.status === 'offline'"
                    class="circle"
                  ></span>
                  <span v-else class="circle pass"></span>
                  {{ $t(`menuManagement.form.status.${record.status}`) }}
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
                    type="text"
                    size="small"
                    @click="handleClickEdit(record)"
                  >
                    {{ $t('menuManagement.columns.operations.edit') }}
                  </a-button>
                  <!-- <a-popconfirm
                    :content="$t('menuManagement.button.confirmation.delete')"
                  >
                    <a-button type="text" size="small">
                      {{ $t('menuManagement.columns.operations.delete') }}
                    </a-button>
                  </a-popconfirm> -->
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" :title="$t('menu.card.tabTwo')"> </a-tab-pane>
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
      @cancel="handleCancel"
      @before-ok="handleBeforeOk"
    >
      <a-form ref="formRef" :model="formModel" :style="{ width: '600px' }">
        <a-form-item field="type" :label="$t('menuManagement.form.type')">
          <a-select
            v-model="formModel.type"
            :options="typeOptions"
            :placeholder="$t('menuManagement.form.type.1')"
          />
        </a-form-item>
        <a-form-item field="pid" :label="$t('menuManagement.form.pid')">
          <a-tree-select
            v-model="formModel.pid"
            :allow-search="true"
            :allow-clear="true"
            :data="treeData"
            placeholder="Please select ..."
            style="width: 300px"
            @change="onChange"
          ></a-tree-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import {
    queryPolicyList,
    PolicyRecord,
    PolicyParams,
    TreeItem,
  } from '@/api/list';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const generateFormModel = () => {
    return {
      id: '',
      type: '',
      name: '',
      pid: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<PolicyRecord[]>([]);
  const formRef = ref<FormInstance>();
  const formModel = ref(generateFormModel());
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
  const filterTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('menuManagement.form.filterType.artificial'),
      value: 'artificial',
    },
    {
      label: t('menuManagement.form.filterType.rules'),
      value: 'rules',
    },
  ]);
  const statusOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('menuManagement.form.status.online'),
      value: 'online',
    },
    {
      label: t('menuManagement.form.status.offline'),
      value: 'offline',
    },
  ]);
  const visible = ref(false);
  const actionModel = ref();
  const selectedKeys = ref([]);
  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    checkStrictly: true,
  });
  const selectedKey = ref<string[]>([]);
  const treeData = ref<Array<TreeItem>>([]);
  const handleClickAdd = () => {
    actionModel.value = 'add';
    formRef.value?.resetFields();
    visible.value = true;
  };
  const handleClickDeleteAll = () => {
    console.log(selectedKeys.value);
  };
  const handleClickEdit = (row) => {
    actionModel.value = 'edit';
    const rowTrans = Object.keys(row).reduce((previousValue, currentValue) => {
      previousValue[currentValue] = {
        value: row[currentValue],
      };
      return previousValue;
    }, {});
    console.log(rowTrans);
    formRef.value?.setFields(rowTrans);
    console.log(formModel);
    visible.value = true;
  };
  const handleBeforeOk = (done) => {
    console.log(formModel);
    window.setTimeout(() => {
      done();
      // prevent close
      // done(false)
    }, 3000);
  };
  const handleCancel = () => {
    visible.value = false;
  };
  const transformRoutes = (routes: any[]) => {
    const list: TreeItem[] = [];
    routes
      .filter((it) => it.hidden !== true)
      .forEach((it) => {
        const searchItem: TreeItem = {
          key: it.id,
          title: it.name,
        };
        if (it.children instanceof Array && it.children.length > 0) {
          searchItem.children = transformRoutes(it.children);
        }
        list.push(searchItem);
      });
    return list;
  };
  const fetchData = async (params: PolicyParams = { scopes: 'admin' }) => {
    setLoading(true);
    try {
      const { data } = await queryPolicyList(params);
      renderData.value = data.nodeTree;
      treeData.value = transformRoutes(data.nodeTree);
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };
  fetchData();
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
