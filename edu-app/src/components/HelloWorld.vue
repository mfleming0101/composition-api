<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script setup>
import useEventSpace from "../use/event-space.js"
// make it explicit where objects are coming from
const { capacity, attending, spacesLeft, increaseCapacity } = useEventSpace()
</script>

