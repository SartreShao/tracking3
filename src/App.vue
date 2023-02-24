<script setup>
import { RouterView } from "vue-router";
import Store from "@/store";

Store.useProvider();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
