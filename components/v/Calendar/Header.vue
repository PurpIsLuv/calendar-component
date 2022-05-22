<template>
  <div class="v-calendar-header">
    <div class="flex">
      <v-button @click="$emit('prev')">
        <icon-prev />
      </v-button>
      <span class="text-lg text-center cursor-default select-none w-24 capitalize">
        <slot />
      </span>
      <v-button @click="$emit('next')">
        <icon-next />
      </v-button>
    </div>
    <div class="grid grid-cols-7 gap-2 mt-2">
      <div
        v-for="(day, index) of $options.DAYS"
        :key="index"
        class="text-md font-medium text-center select-none"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
import { DAYS } from "@/utils/constants"

export default {
  name: "VCalendarHeader",
  DAYS
}
</script>
