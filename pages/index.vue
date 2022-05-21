<template>
  <div>
    <v-calendar />
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
