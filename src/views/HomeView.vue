<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Api from "@/model/api.js";
import AV from "leancloud-storage";

// 要查询的 PRD 文档，对应的数据
const prd_link =
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg";

// 获取 EventList
const eventList = await Api.getEventList(prd_link);

// 获取 EventObjectList
const eventObjectList = eventList
  .map(event => event.objectId)
  .map(eventId => AV.Object.createWithoutData("event", eventId));

console.log("eventObjectList", eventObjectList);

// 获取 Event 的无限集 value：finite_field_value_list
const finiteFieldValueList = await Api.getEventFiniteFieldValueList(
  eventObjectList
);


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
