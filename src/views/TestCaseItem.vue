<template>
  <div class="test-case-item">
    <finite-field-value-item
      v-for="(item, index) in testCase.finite_field_value_list"
      :key="index"
      :finiteFieldValue="item"
    ></finite-field-value-item>
  </div>
</template>

<script setup>
import FiniteFieldValueItem from "@/views/FiniteFieldValueItem.vue";

defineProps({
  testCase: Object
});
</script>

<style lang="scss" scope>
.test-case-item {
  border: 1px solid #dee1e7;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
</style>
