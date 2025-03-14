<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/types.ts'
import eventService from '@/services/eventService'

const event = ref<Event>()
const props = defineProps<{ id: string }> ()
const id = Number (props.id)
  eventService
    .getEvent(id)
    .then((response) => {
    event.value = response.data
  }).catch((error) => {
    console.error('There was an error!', error)
  })

</script>

<template>
  <div v-if="event">
    <h1>(( event.name ))</h1>
    <p>(( event.time )) on (( event.date )) @ (( event.location ))</p>
    <p>(( event.description ))</p>
  </div>
  <div v-else>
    <p>Loading . . .</p>
  </div>
</template>
