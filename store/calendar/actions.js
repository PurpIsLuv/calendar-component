export default {
  async fetchEvents() {
    try {
      const { data } = await this.$axios({
        method: 'GET',
        url: '/api/events'
      })

      return data.events 
    } catch (error) {
      return []
    }
  }
}