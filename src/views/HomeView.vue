<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Api from "@/model/api.js";

Api.test();
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
