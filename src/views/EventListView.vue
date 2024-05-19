<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
import { computed, onMounted, ref, watchEffect } from "vue";

const events = ref(null);

const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
});

const page = computed(() => props.page);

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, page.value)
      .then((response) => (events.value = response.data))
      .catch((error) => console.log(error));
  });
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

      <div class="pagination">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          >Prev Page</router-link
        >

        <router-link
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
          >Next Page</router-link
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
