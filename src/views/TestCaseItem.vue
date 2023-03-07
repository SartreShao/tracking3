<template>
  <div class="test-case-item">
    <div class="finite-field-list">
      <div class="test-case-id">CaseId: {{ testCase.id }}</div>

      <finite-field-value-item
        v-for="(item, index) in testCase.finite_field_value_list"
        :key="index"
        :finiteFieldValue="item"
      ></finite-field-value-item>
    </div>

    <div style="display: flex; flex-direction: row; align-items: center">
      <el-checkbox
        v-model="testCase.is_tested"
        label="is Tested"
        size="large"
      />
      <div style="width: 15px"></div>
    </div>
  </div>
</template>

<script setup>
import FiniteFieldValueItem from "@/views/FiniteFieldValueItem.vue";

defineProps({
  testCase: Object
});
</script>

<style lang="scss" scope>
.test-case-id {
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 12px;
}

.test-case-item {
  border: 1px solid #dee1e7;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.finite-field-list {
  display: flex;
  flex-direction: column;
}
</style>
