<script setup>
import { useRouter } from "vue-router";

defineProps(["event"]);

const router = useRouter();

const handleRegister = () => {
  router.push({
    name: "event-details",
  });
};
</script>
<template>
  <p>Register for the event here</p>
  <button @click="handleRegister">Register</button>
</template>
