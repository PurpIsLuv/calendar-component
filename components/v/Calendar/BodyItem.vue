<template>
  <div
    class="v-calendar-body-item bg-white rounded h-28 w-40 p-2 box-border flex flex-col"
    :class="{
      'border border-black': active
    }"
  >
    <div
      class="text-md font-bold select-none text-right"
      :class="{
        'opacity-50': disabled,
        'text-indigo-500': isWeekend && !active,
        'text-green-500': active
      }"
    >
      {{ date.format('D') }}
    </div>
    <div class="v-calendar-body-item__events h-full overflow-y-auto">
      <div
        v-for="event in events"
        :key="event.id"
        class="v-calendar-body-item__events-badge mt-2 text-xs font-semibold px-2 py-0.5 rounded cursor-pointer relative"
        :class="{
          'bg-green-100 text-green-800': event.type === 'primary',
          'bg-red-100 text-red-800': event.type === 'danger',
          'bg-yellow-100 text-yellow-800': event.type === 'warn'
        }"
      >
        <span>{{ event.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VCalendarBodyItem",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    isWeekend: {
      type: Boolean,
      default: false
    },
    date: {
      type: Object,
      default: () => {}
    },
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.v-calendar-body-item__events::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
}
.v-calendar-body-item__events::-webkit-scrollbar {
  width: 4px;
  background-color: #F5F5F5;
}
.v-calendar-body-item__events::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 1px solid #555555;
}
.v-calendar-body-item__events-badge {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-calendar-body-item__events-badge:hover {
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
}
</style>
