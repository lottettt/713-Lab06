<script setup lang="ts">
import { ref } from 'vue'
import EventCard from '@/components/eventCard.vue'
import eventService from '@/services/eventService.ts'
import type { Event } from '@/types.ts'

const events = ref([])
interface EventResponse {
  data: Event[]
}
eventService.getEvents().then((Response: EventResponse) => {
  events.value = Response.data
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
