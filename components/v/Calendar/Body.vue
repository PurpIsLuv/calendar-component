<template>
  <div class="v-calendar-body grid grid-cols-7 gap-1 bg-gray-100 rounded p-1">
    <v-calendar-body-item
      v-for="(day, index) in days"
      :key="index"
      :disabled="day.isBefore(today)"
      :active="day.isSame(today)"
      :is-weekend="day.weekday() === 5 || day.weekday() === 6"
      :events="events.filter(event => $moment(event.timestamp * 1000).startOf('day').isSame(day))"
      :date="day"
    />
  </div>
</template>

<script>
export default {
  name: "VCalendarBody",
  props: {
    events: {
      type: Array,
      default: () => []
    },
    date: {
      type: Object,
      default: () => {}
    },
    today: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      days: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      // Первый день месяца
      const firstMonthDate = this.date.clone().startOf('month')
      // Понедельник в неделе первого дня месяца
      const startDate = firstMonthDate.clone().startOf('week')

      // Последний день месяца
      const lastMonthDate = this.date.clone().endOf('month')
      // Воскресенье в неделе последнего дня месяца
      const endDate = lastMonthDate.clone().endOf('week')

      const daysLength = endDate.diff(startDate, 'days') + 1

      this.days = [...Array(daysLength)].map((_, i) => {
        return startDate.clone().add(i, 'day').startOf('day')
      })
    }
  }
}
</script>