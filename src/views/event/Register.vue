<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

defineProps(["event"]);

const router = useRouter();
const GStore = inject("GStore");

const handleRegister = () => {
  GStore.flashMessage = "Registerd Succefully";

  setTimeout(() => {
    GStore.flashMessage = "";
    router.push({
      name: "event-details",
    });
  }, 3000);
};
</script>
<template>
  <p>Register for the event here</p>
  <button @click="handleRegister">Register</button>
</template>
