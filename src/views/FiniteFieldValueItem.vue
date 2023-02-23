<template>
  <div
    class="finite_field_value_item"
    :class="{ 'test-focus': finiteFieldValue.is_test_focus }"
  >
    <div>
      {{ finiteFieldValue.finite_field.description }}｜{{
        finiteFieldValue.description
      }}
    </div>

    <div>
      {{ finiteFieldValue.finite_field.name }}:{{ finiteFieldValue.name }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  finiteFieldValue: Object
});
</script>

<style lang="scss" scoped>
.finite_field_value_item {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.test-focus {
  color: red;
}
</style>
