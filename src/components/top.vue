<template>
  <div class="top_content">
    <div class="top_left">
      <div v-for="item in data" :key="item.id" class="to_today">
        {{item.name}}
      </div>
    </div>
    <div class="top_operation" @click="handleOk">
      生成
    </div>
  </div>
</template>
    
<script>
import { defineComponent, ref, onMounted } from 'vue';
import { DataServices } from '@/assets/js/data';
export default defineComponent({
  setup() {
    const locaKey = 'dish';
    const data = ref([]);
    const handleOk = () => {
      DataServices.getRandomItemsFromArray(locaKey, 3).then(res => {
        data.value = res
      })
    }

    return {
      data,
      handleOk
    }
  }
})
 </script>
    
<style scoped>
.top_content {
  height: 18vh;
  background-color: rgba(211, 211, 211, 0.1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.top_operation {
  height: 100%;
  width: 200px;
  color: #fff;
  border-radius: 10px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top_left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.to_today {
  width: 100px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>