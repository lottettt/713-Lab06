<script setup lang="ts">
import { ref, computed } from 'vue'
import EventCard from '@/components/eventCard.vue'
import eventService from '@/services/eventService.ts'
import type { Event } from '@/types.ts'

const events = ref([])
interface EventResponse {
  data: Event[]
}

interface Props {
  page: number
}

const props = defineProps<Props>()
const page = computed(() => props.page)
eventService.getEvents(page.value, 2).then((response) => {
  events.value = Response.data
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
        <div class="pagination">
          <RouterLink
            id="page-prev"
            :to="{ name: 'event-list-view', query: { page: page - 1 } }"
            rel="prev"
            v-if="page != 1"
            >Prev Page</RouterLink
          >

          <RouterLink
            id="page-next"
            :to="{ name: 'event-list-view', query: { page: page  1 } }"
            rel="next"
            >Next Page</RouterLink
          >
        </div>
  </div>
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
