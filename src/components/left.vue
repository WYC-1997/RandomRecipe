<template>
  <div class="left_content">
    <div class="title_content">
      <span class="titleSpan">
        <!-- 食谱 -->
      </span>
    </div>
    <div class="dishName" v-for="item in  data" :key="item.id">
      <div>
        <span>
          {{item.name}}
        </span>
      </div>
      <a-button type="primary" shape="circle" @click="deleteData(item.id)">
        <template #icon>
          <DeleteOutlined />
        </template>
      </a-button>
    </div>
    <div class="dishName">
      <a-input-search v-model="disName" placeholder="在这里输入" enter-button="+" size="large" @search="onSearch" />
    </div>
  </div>
</template>

<script>
import { DeleteOutlined } from '@ant-design/icons-vue';
import { DataServices } from '@/assets/js/data';
import { defineComponent, ref, onMounted } from 'vue';
import { message } from "ant-design-vue";
import { uuid } from 'vue-uuid' // Import uuid  
export default defineComponent({
  components: {
    DeleteOutlined
  },
  setup() {
    const locaKey = 'dish';
    const disName = ref('');
    const data = ref([]);
    const onSearch = searchValue => {
      if (!searchValue) {
        message.error('请输入内容')
        return
      }
      DataServices.saveData(locaKey, { id: uuid.v1(), name: searchValue }).then(res => {
        if (res) {
          getData()
          disName.value = ''
        } else {
          message.error('重复了')
        }
      });
    };
    const getData = () => {
      DataServices.getAllData(locaKey).then(res => {
        console.log(res);
        data.value = res;
      });
    }

    const deleteData = (id) => {
      console.log(id);
      DataServices.removeData(locaKey, id).then(res => {
        if (res) {
          getData()
        }
      })
    }
    onMounted(() => {
      getData()
    })

    return {
      disName,
      data,
      onSearch,
      deleteData
    };
  }
})
</script>

<style scoped>
.ant-btn-primary {
  background: transparent !important;
  border: transparent !important;
}
</style>

<style>
.left_content {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 49%;
  height: 80vh;
  background-color: rgba(211, 211, 211, 0.1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 10px;
}
.dishName {
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
.title_content {
  width: 100%;
  text-align: center;
}
.titleSpan {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}
.ant-input {
  background-color: transparent !important;
  border: 0px !important;
  color: #fff !important;
}
.ant-input-group-addon > .ant-btn-primary {
  background: transparent !important;
  border: transparent !important;
}
.ant-input-group-addon {
  background: transparent !important;
}
</style>