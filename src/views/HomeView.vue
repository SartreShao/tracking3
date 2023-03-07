<script setup>
import VM from "@/viewmodels/index.js";
import { ref, inject } from "vue";
import EventItem from "@/views/EventItem.vue";
import Store from "@/store";

// 要查询的 PRD 文档，对应的数据
const prd_link = ref(
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg"
);

// 要查询的 session_id
const session_id = inject(Store.session_id);

// 要查询的 mid
const mid = inject(Store.mid);

// 要查询的 uid
const uid = inject(Store.uid);

// 生成的测试用例列表
const eventTestCaseList = ref([]);

// 生成测试用例
const click_generateTestcase = () => {
  VM.getEventTestCaseList(prd_link, eventTestCaseList);
};

const click_submitTestCase = () => {
  VM.getTestReport(eventTestCaseList, mid, uid, session_id);
};
</script>

<template>
  <div class="home-container">
    <!-- 生成 测试用例 容器 -->
    <div class="generated-container">
      <el-input
        class="input"
        v-model="prd_link"
        placeholder="PRD Document Link"
      />
      <el-button type="primary" @click="click_generateTestcase"
        >Generate Testcase</el-button
      >
    </div>

    <!-- session_id 输入框 -->
    <div class="session-id-container">
      <el-input class="input" v-model="mid" placeholder="mid" />
      <div style="width: 20px"></div>
      <el-input class="input" v-model="uid" placeholder="uid" />
      <div style="width: 20px"></div>
      <el-input class="input" v-model="session_id" placeholder="session_id" />
    </div>

    <!-- 测试用例 容器 -->
    <div class="event-list">
      <!-- event-list-item -->
      <event-item
        v-for="(event, eventIndex) in eventTestCaseList"
        :key="eventIndex"
        :event="event"
      ></event-item>

      <el-button
        style="height: 45px"
        v-if="eventTestCaseList.length !== 0"
        type="primary"
        @click="click_submitTestCase"
      >
        Submit
      </el-button>
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
  }
}
</style>
