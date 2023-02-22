<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Api from "@/model/api.js";

// 要查询的 PRD 文档，对应的数据
const prd_link =
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg";

// 获取 EventList
const eventList = await Api.getEventList(prd_link);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
