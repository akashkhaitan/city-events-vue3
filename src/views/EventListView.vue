<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
import { onMounted, ref } from "vue";

const events = ref(null);

onMounted(() => {
  EventService.getEvents()
    .then((response) => (events.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  <main>
    <h1>Events for Good</h1>
    <RouterLink :to="{ name: 'create-event' }">
      <button>Create Event</button>
    </RouterLink>

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
