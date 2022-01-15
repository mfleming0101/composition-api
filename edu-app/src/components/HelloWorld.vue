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
import { computed, reactive, toRefs } from 'vue'
export default {
  setup() {
    const myEvent = reactive({
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
      spacesLeft: computed(() => {
        return myEvent.capacity - myEvent.attending.length
      })
    })

    function increaseCapacity() {
      myEvent.capacity++
    }

    return { ...toRefs(myEvent), increaseCapacity }
  }
}
</script>

