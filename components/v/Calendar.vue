<template>
  <div class="v-calendar">
    calendar
  </div>
</template>

<script>
export default {
  name: "VCalendar",
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>