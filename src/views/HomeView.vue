<script setup>
import VM from "@/viewmodels/index.js";
import { ref } from "vue";

// 要查询的 PRD 文档，对应的数据
const prd_link = ref(
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg"
);

const eventTestCaseList = ref([]);

VM.getEventTestCaseList(prd_link, eventTestCaseList);
</script>

<template>
  <div class="home-container">
    <!-- 生成 测试用例 按钮 -->
    <div class="generated-container">
      <el-input
        class="input"
        v-model="prd_link"
        placeholder="Please input prd link"
      />
      <el-button type="primary">Generate Testcase</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;

  .generated-container {
    display: flex;
    flex-direction: row;

    .input {
      margin-right: 20px;
    }
  }
}
</style>
