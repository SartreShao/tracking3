<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Api from "@/model/api.js";
import AV from "leancloud-storage";

//-----------------------函数-------------------------------------

const getEventList = async prd_link => {
  //----------------------------------------------------------------
  // 1. 获取数据
  //----------------------------------------------------------------

  // 获取 event_list
  const eventList = await Api.getEventList(prd_link);

  // 获取 event_finite_field_value_list
  const eventFiniteFieldValueList = await Api.getEventFiniteFieldValueList(
    eventList
      .map(event => event.objectId)
      .map(eventId => AV.Object.createWithoutData("event", eventId))
  );

  // 获取 EventList 相关联的 finite_field_value
  const finiteFieldValueList = await Api.getFiniteFieldValueList(
    eventFiniteFieldValueList.map(object => object.finite_field_value.objectId)
  );

  // 获取 finite_field_value_list 相关联的 field
  const fieldList = await Api.getFieldList(
    finiteFieldValueList.map(object => object.finite_field.objectId)
  );

  //----------------------------------------------------------------
  // 2. 组合数据
  //----------------------------------------------------------------

  // 将 finiteFieldValueList 存到 Map 里
  const finiteFieldValueMap = new Map();
  for (let i = 0; i < finiteFieldValueList.length; i++) {
    const finiteFieldValue = finiteFieldValueList[i];
    finiteFieldValueMap.set(finiteFieldValue.objectId, finiteFieldValue);
  }
  console.log("finiteFieldValueMap", finiteFieldValueMap);

  // 将 fieldList 存到 Map 里
  const fieldMap = new Map();
  for (let i = 0; i < fieldList.length; i++) {
    const field = fieldList[i];
    fieldMap.set(field.objectId, field);
  }

  console.log("fieldMap", fieldMap);

  // 将 finiteFieldValue 组合到 EventList 上
  for (let i = 0; i < eventList.length; i++) {
    const event = eventList[i];
    event.finiteFieldValueList = [];
    for (let j = 0; j < eventFiniteFieldValueList.length; j++) {
      const eventFiniteFieldValue = eventFiniteFieldValueList[j];
      if (event.objectId === eventFiniteFieldValue.event.objectId) {
        event.finiteFieldValueList.push(
          finiteFieldValueMap.get(
            eventFiniteFieldValue.finite_field_value.objectId
          )
        );
      }
    }
  }

  // 将 fieldList 组合到 EventList 上
  for (let i = 0; i < eventList.length; i++) {
    const event = eventList[i];
    for (let j = 0; j < event.finiteFieldValueList.length; j++) {
      const finiteFieldValue = event.finiteFieldValueList[j];
      finiteFieldValue.finite_field = fieldMap.get(
        finiteFieldValue.finite_field.objectId
      );
    }
  }
  return eventList;
};

//----------------------------------------------------------------

// 要查询的 PRD 文档，对应的数据
const prd_link =
  "https://st94nif1cq.feishu.cn/wiki/wikcnT2mkPqNbbRklhri8rszPMg";

const eventList = await getEventList(prd_link);
console.log("eventList", eventList);

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
