<template>
  <div class="container">
    <Breadcrumb :items="['menu.menu', 'menu.menu.menuList']" />
    <a-card class="general-card" :title="$t('menu.menu.menuList')">
      <!-- <a-row>
        <a-col :flex="1">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="number" :label="$t('menuList.form.number')">
                  <a-input
                    v-model="formModel.number"
                    :placeholder="$t('menuList.form.number.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" :label="$t('menuList.form.name')">
                  <a-input
                    v-model="formModel.name"
                    :placeholder="$t('menuList.form.name.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="contentType"
                  :label="$t('menuList.form.contentType')"
                >
                  <a-select
                    v-model="formModel.contentType"
                    :options="contentTypeOptions"
                    :placeholder="$t('menuList.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="filterType"
                  :label="$t('menuList.form.filterType')"
                >
                  <a-select
                    v-model="formModel.filterType"
                    :options="filterTypeOptions"
                    :placeholder="$t('menuList.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="createdTime"
                  :label="$t('menuList.form.createdTime')"
                >
                  <a-range-picker
                    v-model="formModel.createdTime"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="status" :label="$t('menuList.form.status')">
                  <a-select
                    v-model="formModel.status"
                    :options="statusOptions"
                    :placeholder="$t('menuList.form.selectDefault')"
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
              {{ $t('menuList.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('menuList.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row> -->
      <!-- <a-divider style="margin-top: 0" /> -->
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" :title="$t('menu.card.tabOne')">
          <a-row style="margin-bottom: 16px">
            <a-col :span="16">
              <a-space>
                <a-button type="primary" @click="handleClick">
                  <template #icon>
                    <icon-plus />
                  </template>
                  {{ $t('menuList.operation.create') }}
                </a-button>
                <a-button type="primary">
                  <template #icon>
                    <icon-delete />
                  </template>
                  {{ $t('menuList.operation.delete') }}
                </a-button>
                <!-- <a-upload action="/">
                  <template #upload-button>
                    <a-button>
                      {{ $t('menuList.operation.import') }}
                    </a-button>
                  </template>
                </a-upload> -->
              </a-space>
            </a-col>
            <a-col :span="8" style="text-align: right">
              <a-button>
                <template #icon>
                  <icon-download />
                </template>
                {{ $t('menuList.operation.download') }}
              </a-button>
            </a-col>
          </a-row>
          <a-switch v-model="rowSelection.checkStrictly" />
          <a-table
            row-key="id"
            :loading="loading"
            :data="renderData"
            :bordered="false"
            v-model:expandedKeys="expandedKeys"
            :row-selection="rowSelection"
          >
            <template #columns>
              <a-table-column
                :title="$t('menuList.columns.number')"
                data-index="number"
              />
              <a-table-column
                :title="$t('menuList.columns.name')"
                data-index="name"
              />
              <a-table-column
                :title="$t('menuList.columns.contentType')"
                data-index="contentType"
              >
                <template #cell="{ record }">
                  <a-space>
                    <!-- <a-avatar
                      v-if="record.contentType === 'img'"
                      :size="16"
                      shape="square"
                    >
                      <img
                        alt="avatar"
                        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"
                      />
                    </a-avatar>
                    <a-avatar
                      v-else-if="record.contentType === 'horizontalVideo'"
                      :size="16"
                      shape="square"
                    >
                      <img
                        alt="avatar"
                        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"
                      />
                    </a-avatar>
                    <a-avatar v-else :size="16" shape="square">
                      <img
                        alt="avatar"
                        src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"
                      />
                    </a-avatar> -->
                    {{ $t(`menuList.form.contentType.${record.contentType}`) }}
                  </a-space>
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuList.columns.filterType')"
                data-index="filterType"
              >
                <template #cell="{ record }">
                  {{ $t(`menuList.form.filterType.${record.filterType}`) }}
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuList.columns.count')"
                data-index="count"
              />
              <a-table-column
                :title="$t('menuList.columns.createdTime')"
                data-index="createdTime"
              />
              <a-table-column
                :title="$t('menuList.columns.status')"
                data-index="status"
              >
                <template #cell="{ record }">
                  <span
                    v-if="record.status === 'offline'"
                    class="circle"
                  ></span>
                  <span v-else class="circle pass"></span>
                  {{ $t(`menuList.form.status.${record.status}`) }}
                </template>
              </a-table-column>
              <a-table-column
                :title="$t('menuList.columns.operations')"
                data-index="operations"
              >
                <template #cell>
                  <a-button type="text" size="small">
                    {{ $t('menuList.columns.operations.view') }}
                  </a-button>
                </template>
              </a-table-column>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" :title="$t('menu.card.tabTwo')">
          Content of Tab Panel 2
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-modal
      v-model:visible="visible"
      title="Modal Form"
      @cancel="handleCancel"
      @before-ok="handleBeforeOk"
    >
      <a-form :model="form">
        <a-form-item field="name" label="Name">
          <a-input v-model="form.name" />
        </a-form-item>
        <a-form-item field="post" label="Post">
          <a-select v-model="form.post">
            <a-option value="post1">Post1</a-option>
            <a-option value="post2">Post2</a-option>
            <a-option value="post3">Post3</a-option>
            <a-option value="post4">Post4</a-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { queryPolicyList, PolicyRecord, PolicyParams } from '@/api/list';
  // import { Pagination } from '@/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';

  const generateFormModel = () => {
    return {
      number: '',
      name: '',
      contentType: '',
      filterType: '',
      createdTime: [],
      status: '',
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref<PolicyRecord[]>([]);
  const formModel = ref(generateFormModel());
  // const basePagination: Pagination = {
  //   current: 1,
  //   pageSize: 20,
  // };
  // const pagination = reactive({
  //   ...basePagination,
  // });
  const contentTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('menuList.form.contentType.img'),
      value: 'img',
    },
    {
      label: t('menuList.form.contentType.horizontalVideo'),
      value: 'horizontalVideo',
    },
    {
      label: t('menuList.form.contentType.verticalVideo'),
      value: 'verticalVideo',
    },
  ]);
  const filterTypeOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('menuList.form.filterType.artificial'),
      value: 'artificial',
    },
    {
      label: t('menuList.form.filterType.rules'),
      value: 'rules',
    },
  ]);
  const statusOptions = computed<SelectOptionData[]>(() => [
    {
      label: t('menuList.form.status.online'),
      value: 'online',
    },
    {
      label: t('menuList.form.status.offline'),
      value: 'offline',
    },
  ]);
  const visible = ref(false);
  const expandedKeys = ref([]);

  const rowSelection = {
    type: 'checkbox',
    showCheckedAll: true,
    checkStrictly: true,
  };
  const form = reactive({
    name: '',
    post: '',
  });
  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = (done) => {
    console.log(form);
    window.setTimeout(() => {
      done();
      // prevent close
      // done(false)
    }, 3000);
  };
  const handleCancel = () => {
    visible.value = false;
  };
  const fetchData = async (params: PolicyParams = { scopes: 'admin' }) => {
    setLoading(true);
    try {
      const { data } = await queryPolicyList(params);

      renderData.value = data.nodeTree;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  // const search = () => {
  //   fetchData({
  //     ...basePagination,
  //     ...formModel.value,
  //   } as unknown as PolicyParams);
  // };
  // const onPageChange = (current: number) => {
  //   fetchData({ ...basePagination, current });
  // };

  fetchData();
  const reset = () => {
    formModel.value = generateFormModel();
  };
</script>

<script lang="ts">
  export default {
    name: 'SearchTable',
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
