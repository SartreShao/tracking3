<script setup>
import VM from "@/viewmodels/index.js";
import { ref } from "vue";

// 要查询的 PRD 文档，对应的数据
const prd_link =
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg";

const eventTestCaseList = ref([]);

VM.getEventTestCaseList(prd_link, eventTestCaseList);
</script>

<template>
  <div>hello</div>
</template>
