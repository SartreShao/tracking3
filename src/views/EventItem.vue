<template>
  <div class="event-item">
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
</template>

<script setup>
import TestCaseItem from "@/views/TestCaseItem.vue";

defineProps({
  event: Object
});
</script>

<style lang="scss" scoped>
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
</style>
