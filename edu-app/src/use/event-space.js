import { computed, reactive, toRefs } from 'vue'
export default function useEventSpace() {
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
