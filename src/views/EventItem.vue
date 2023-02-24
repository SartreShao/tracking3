<template>
  <div class="event-item">
    <!-- event-title -->
    <div class="event-title-container">
      <div class="event-title">{{ event.name }}</div>
      <el-button @click="click_submit(event)">Submit</el-button>
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
import Store from "@/store";
import { inject } from "vue";

defineProps({
  event: Object
});

// 要查询的 session_id
const session_id = inject(Store.session_id);

// 要查询的 mid
const mid = inject(Store.mid);

// 要查询的 uid
const uid = inject(Store.uid);

/**
 * 点击 Submit 按钮
 */
const click_submit = event => {
  const submitResult = {
    event: {
      objectId: event.objectId,
      name: event.name,
      description: event.description
    },
    testCaseList: [],
    limitField: {
      mid: mid.value,
      uid: uid.value,
      session_id: session_id.value
    }
  };

  for (let i = 0; i < event.testCaseList.length; i++) {
    const testCase = event.testCaseList[i];
    if (testCase.is_tested) {
      const submitTestCase = [];
      testCase.finite_field_value_list.forEach(finite_field_value => {
        submitTestCase.push({
          field: {
            objectId: finite_field_value.finite_field.objectId,
            name: finite_field_value.finite_field.name,
            description: finite_field_value.finite_field.description,
            is_finite: finite_field_value.finite_field.is_finite,
            extra: finite_field_value.finite_field.extra
          },
          value: {
            objectId: finite_field_value.objectId,
            name: finite_field_value.name,
            description: finite_field_value.description
          }
        });
      });
      submitResult.testCaseList.push(submitTestCase);
    }
  }

  console.log("submit", JSON.stringify(submitResult));
};
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
