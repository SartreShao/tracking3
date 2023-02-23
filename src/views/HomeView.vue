<script setup>
import VM from "@/viewmodels/index.js";
import { ref } from "vue";
import TestCaseItem from "@/views/TestCaseItem.vue";

// 要查询的 PRD 文档，对应的数据
const prd_link = ref(
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg"
);

// 要查询的 session_id
const session_id = ref("");

const eventTestCaseList = ref([]);

VM.getEventTestCaseList(prd_link, eventTestCaseList);
</script>

<template>
  <div class="home-container">
    <!-- 生成 测试用例 容器 -->
    <div class="generated-container">
      <el-input
        class="input"
        v-model="prd_link"
        placeholder="Please input prd link"
      />
      <el-button type="primary">Generate Testcase</el-button>
    </div>

    <!-- session_id 输入框 -->
    <div class="session-id-container">
      <el-input
        class="input"
        v-model="session_id"
        placeholder="Please input session_id"
      />
    </div>

    <!-- 测试用例 容器 -->
    <div class="event-list">
      <!-- event-list-item -->
      <div
        class="event-item"
        v-for="(event, eventIndex) in eventTestCaseList"
        :key="eventIndex"
      >
        <!-- event-title -->
        <div class="event-title-container">
          <div class="event-title">{{ event.name }}</div>
          <el-button>Submit</el-button>
        </div>

        <!-- event-testcase-list -->
        <div class="test-case-list">
          <test-case-item
            v-for="(testCase, testCaseIndex) in event.testCaseList"
            :key="testCaseIndex"
            :testCase="testCase"
          ></test-case-item>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;

  // 生成 测试用例 容器
  .generated-container {
    display: flex;
    flex-direction: row;

    .input {
      margin-right: 10px;
    }
  }

  // session_id 输入框
  .session-id-container {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  // 测试用例 容器
  .event-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    .event-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 1px solid #dee1e7;
      margin-bottom: 10px;

      .event-title-container {
        margin: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .event-title {
          font-size: 15px;
        }
      }

      .test-case-list {
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
