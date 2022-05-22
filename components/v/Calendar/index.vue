<template>
  <div class="v-calendar rounded shadow-md p-4 bg-white">
    <v-calendar-header
      @prev="onPrev"
      @next="onNext"
    >
      {{ currentDateText }}
    </v-calendar-header>
    <v-calendar-body
      ref="body"
      :date="currentDate"
      :today="today"
      :events="events"
    />
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
  },
  data() {
    return {
      today: this.$moment().startOf('day'),
      currentDate: this.$moment(),
      currentDateText: this.$moment().format('MMMM'),
    }
  },
  methods: {
    onPrev() {
      this.currentDate.subtract(1, 'M')
      this.currentDateText = this.currentDate.format('MMMM')
      this.$refs.body.init()
    },
    onNext() {
      this.currentDate.add(1, 'M')
      this.currentDateText = this.currentDate.format('MMMM')
      this.$refs.body.init()
    }
  }
}
</script>