<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity">Increase Capacity</button>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
    <p>{{ tim }}</p>
  </div>
</template>

<script>
import useEventSpace from "../use/event-space.js"
export default {
  setup() {
    // make it explicit where objects are coming from
    const { capacity, attending, spacesLeft, increaseCapacity } = useEventSpace()
    return { capacity, attending, spacesLeft, increaseCapacity }
  }
}
</script>

