<script setup lang="ts">
import { ref } from 'vue'
import EventCard from '@/components/eventCard.vue'

const events = ref([
  { id: 1, title: 'Event 1', date: '2021-07-01' },
  { id: 2, title: 'Event 2', date: '2021-07-02' },
  { id: 3, title: 'Event 3', date: '2021-07-03' },
])
</script>

<template>
  <div>
    <EventCard v-for="event in events" :key="event.id" />
  </div>
</template>
