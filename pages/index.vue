<template>
  <div class="h-screen bg-gray-100">
    <div class="container mx-auto flex justify-center items-center">
      <client-only>
        <v-calendar :events="events" />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ store }) {
    const events = await store.dispatch('calendar/fetchEvents')

    return { events }
  }
}
</script>
