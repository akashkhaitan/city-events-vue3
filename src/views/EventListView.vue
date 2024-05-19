<script setup>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const events = ref(null);

onMounted(() => {
  axios
    .get(
      "https://my-json-server.typicode.com/akashkhaitan/city-events-vue3/events"
    )
    .then((response) => (events.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  <main>
    <h1>Events for Good</h1>
    <div class="events">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
      ></EventCard>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
